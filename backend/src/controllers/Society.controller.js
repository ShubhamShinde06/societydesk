import ErrorHandler from "../utils/errorHandler.js";
import SocietyModel from "../models/Society.model.js";
import MemberModel from "../models/Society.model.js";
import SuccessHandler from "../utils/sucessHandler.js";
import bcryptjs from "bcryptjs";

export const SocietyRegister = async (req, res) => {
  const { SocietyData, MemberData } = req.body;
  const {
    SocName,
    State,
    City,
    Address,
    SocWings,
    SocFloor,
    SocFlats_per_Floor,
  } = SocietyData;

  const { Name, Email, MobNo, Pwd } = MemberData;

  if (!SocietyData || !MemberData) {
    return ErrorHandler(res, "Missing Data", null, 404);
  }

  try {
    // Slugify SocName (replace spaces with "-")
    //const SocNameSlug = SocName?.trim().replace(/\s+/g, "-")

    // Generate SocCode
    const prefix = SocName?.substring(0, 3).toUpperCase(); // first 3 chars
    const randomDigits = Math.floor(100000 + Math.random() * 900000); // 6 digit random
    const SocCode = `${prefix}-${randomDigits}`;

    const newSociety = new SocietyModel({
      SocCode,
      State,
      City,
      Address,
      SocWings,
      SocFloor,
      SocFlats_per_Floor,
    });

    const MemberFind = await MemberModel.findOne({ Email, MobNo });
    if (MemberFind) {
      return ErrorHandler(res, "Member Already Register", null, 202);
    }

    const newMember = new MemberModel({
      Name,
      Email,
      MobNo,
      Pwd,
    });

    await newSociety.save();
    await newMember.save();

    return SuccessHandler(res, "Society Registerd Sucessfully");
  } catch (error) {
    return ErrorHandler(res, "Server Down Society Register", error, 500);
  }
};

export const MemberSignUp = async (req, res) => {
  const { data } = req.body;

  if (!data) {
    return ErrorHandler(res, "Missing Data", null, 404);
  }

  try {
    // Check society exists
    const SocietyFind = await SocietyModel.findOne({ SocCode: data.SocCode });
    if (!SocietyFind) {
      return ErrorHandler(res, "Society Not Found", null, 404);
    }

    // Check if member already exists by email OR mobile
    const MemberFind = await MemberModel.findOne({
      $or: [{ Email: data.Email }, { MobNo: data.MobNo }],
    });

    if (MemberFind) {
      return ErrorHandler(res, "Member Already Registered", null, 202);
    }

    // Generate WFF = Wing-FloorFlat (e.g., A-1204)
    const WFF = `${data.Wing}-${data.Floor}${String(data.Flat).padStart(
      2,
      "0"
    )}`;

    const hashedPassword = await bcryptjs.hash(data.Pwd, 10);

    // Create new member
    const newMember = new MemberModel({
      Name: data.Name,
      Email: data.Email,
      MobNo: data.MobNo,
      Pwd: hashedPassword,
      SocCode: data.SocCode,
      Wing: data.Wing,
      Floor: data.Floor,
      Flat: data.Flat,
      WFF: WFF,
    });

    await newMember.save();

    return SuccessHandler(res, "Member Registered Successfully");
  } catch (error) {
    return ErrorHandler(res, "Server Down Member SignUp", error, 500);
  }
};

export const MemberSignIn = async (req, res) => {
  const { data } = req.data;

  if (!data) {
    return ErrorHandler(res, "Missing Data", null, 404);
  }

  try {
    const SocietyFind = await SocietyModel.findOne({ SocCode: data.SocCode });
    if (!SocietyFind) {
      return ErrorHandler(res, "Society Not Found", null, 404);
    }

    const MemberFind = await MemberModel.find({
      $and: [{ Email: data.Email }, { MobNo: data.MobNo }],
    });
    if (!MemberFind) {
      return ErrorHandler(res, "Member Not Found", null, 404);
    }

    const isPasswordValid = await bcryptjs.compare(data.Pwd, MemberFind.Pwd);
    if (!isPasswordValid) {
      return ErrorHandler(res, "Password Wrong!", null, 302);
    }

    await MemberFind.save();

    return SuccessHandler(res, "Member Login Successfully");
    
  } catch (error) {
    return ErrorHandler(res, "Server Down Member SignIn", error, 500);
  }
};
