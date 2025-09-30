import mongoose from "mongoose";

const SocietySchema = new mongoose.Schema({

    SocCode:{
        type: String,
        required: true,
        unique: true 
    },
    SocName:{
        type: String,
        required: true
    },
    State:{
        type: String,
        required: true
    },
    City:{
        type: String,
        required: true
    },
    Address:{
        type: String,
        required: true
    },
    SocWings:{
        type: Array,
        required: true
    },
    SocFloor:{
        type: Number,
        required: true
    },
    SocFlats_per_Floor:{
        type: Number,
        required: true
    },


},{timestamps: true})

const SocietyModel = mongoose.models.Society || mongoose.model("Society", SocietySchema);

export default SocietyModel;