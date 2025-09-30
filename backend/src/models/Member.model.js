import mongoose from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    SocCode: {
      type: String,
      required: true,
    },
    Wing: {
      type: String,
      required: true,
    },
    Floor: {
      type: Number,
      required: true,
    },
    Flat: {
      type: Number,
      required: true,
    },
    WFF: { // A-1204 Wing-FloorNo_FlatNo
      type: String,
      required: true,
    },
    Name:{
      type: String,
      required: true, 
      unique: true 
    },
    Email:{
      type: String,
      required: true, 
      unique: true 
    },
    MobNo:{
      type: String,
      required: true, 
      unique: true 
    },
    Pwd:{
       type: String,
      required: true, 
    }
  },
  { timestamps: true }
);

const MemberModel = mongoose.models.Member || mongoose.model("Member", MemberSchema);

export default MemberModel;
