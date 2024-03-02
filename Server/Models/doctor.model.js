const mongoose = require("mongoose")
const schema = mongoose.Schema;

const DoctorSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    profilePic:{type:String},
    videos:[{
        videoTitle : {type:String},
        videoDiscription:{type:String},
        videoFile: {type:String}
    },{timestamps:true}],
    bio:{ type: String},
    phone: { type: String },
    address: { type: String },
    age:{ type: String },
    email: { type: String, require: true },
    isEmailVerified: { type: Boolean, default: false },
    password: { type: String, require: true },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    age: { type: Number },
    website:{type:String},
    speciliest:{type: String,},
    availableDays: [{
        days: { type: String, enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] }
    }],
    degree: { type: String },
    study: { type: String },
    certificate: [{
        files: String
    }],
    apointments: [{
        date:{type:Date, default:Date.now()},
        _id: { type: schema.Types.ObjectId, ref: 'UserSchema' },
    }],
    workingAt: { type: String },
    eSigniture: { type: String },
    eStamp: { type: String },
    isVerifiedDoctor: {type:Boolean, default:false},
    

}, { timestamps: true })

module.exports = mongoose.model("DoctorSchema", DoctorSchema)