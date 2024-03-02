const UserSchema = require("../Models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const salt = 10;

exports.RegisterUser = async(req,res)=>{
    try {
        const {name, password,confirmPassword, email} = req.body.formData;
        //Checking if user already exists in the database or not
        const isExist = await UserSchema.findOne({ email});
        if (isExist) return res.status(400).send('Email Already Exists');
        // checking passwords are matching or not
        const isPassMatch = (password == confirmPassword);
        if (!isPassMatch) return res.status(400).send('Please enter Correct Password')
        //Creating a new user and saving it to the database
        await UserSchema.create({ name ,email ,password :await bcrypt.hash(password,salt)}).then(()=>{
            return res.status(200).json({message:"Registeration SuccessFull"})
        })
    } catch (error) {
        return res.status(503).json({message:error.message})
    }
}