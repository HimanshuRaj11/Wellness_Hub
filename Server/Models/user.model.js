const mongoose = require("mongoose")
const schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone : {Type:String},
    address : {Type: String},
    email : {type:String, require:true},
    isEmailVerified: {type:Boolean, default:false},
    password : {type:String ,require:true},
    gender : {
        type: String,
        enum: ["Male", "Female", "Other"]
    },
    age : {type: Number},
    apointments:[{
        date:{type:Date, default:Date.now()},
        _id:{type: schema.Types.ObjectId, ref: 'DoctorSchema'},
    }]

},{timestamps:true})

module.exports = mongoose.model("UserSchema", UserSchema)