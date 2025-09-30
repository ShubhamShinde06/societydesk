import mongoose from "mongoose";

const MemberLogSchema = new mongoose.Schema({

    SessionID:{
        type: String,
        required: true
    }

},{timestamps: true})

const MemberLog = mongoose.models.MemberLog || mongoose.model("MemberLog", MemberLogSchema);

export default MemberLog;