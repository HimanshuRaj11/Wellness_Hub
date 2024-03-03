const DoctorSchema = require("../Models/doctor.model")
const UserSchema = require("../Models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const salt = 10;

exports.RegisterDoctor = async (req, res) => {
    try {
        const { name, password, confirmPassword, email,bio,phone,address,age,gender,speciliest,degree,workingAt ,study,website} = req.body.formData;
        //Checking if user already exists in the database or not
        if (!name || !password || !confirmPassword || !email) return res.status(422).send({ error: "Please fill all fields" });
        const isExist = await DoctorSchema.findOne({ email });
        if (isExist) return res.status(400).send('Email Already Exists');
        // checking passwords are matching or not
        const isPassMatch = (password == confirmPassword);
        if (!isPassMatch) return res.status(400).send('Please enter Correct Password')
        //Creating a new user and saving it to the database
        await DoctorSchema.create({ name, email, password: await bcrypt.hash(password, salt),bio,phone,study,website,speciliest,address,age,gender,degree,workingAt }).then(async (data) => {
            const GenrateTokens = await jwt.sign({ data }, process.env.SECRET_KEY)
            res.cookie('WellnessHub', GenrateTokens);
            return res.status(200).json({ message: "Registeration SuccessFull", GenrateTokens })
        })
    } catch (error) {
        return res.status(503).json({ message: error.message })
    }
}

exports.LoginDoctor = async (req, res) => {
    try {
        const { email, password } = req.body.formData;
        //Finding the user from the Db
        const user = await DoctorSchema.findOne({ email }) || await UserSchema.findOne({ email })
        if (!user) return res.status(400).send('Invalid Email Id / Password ')

        //Verifying the password using bcrypt compareSync function
        const IsValidPassword = await bcrypt.compareSync(password, user.password)

        if (!IsValidPassword) return res.status(400).json({ message: 'Invalid Email Id / Password' });
        //Generate token for the user after successful login
        const GenrateTokens = await jwt.sign({ user }, process.env.SECRET_KEY)
        res.cookie('WellnessHub', GenrateTokens);
        return res.status(200).json({ message: "Logged In Succesfully!", GenrateTokens })

    } catch (error) {
        return res.status(503).json({ message: error.message })
    }
}

exports.DoctorProfile = async(req,res)=>{
    try {
        const User = req.user;
        return res.status(201).json({User})
    } catch (error) {
        return res.status(503).json({ message: error.message })
    }
}

exports.DoctorUpdateProfile = async(req, res)=>{
    try {
        const {user} = req.user;
        console.log(user._id);
        const _id = user._id
        const User = await  DoctorSchema.findByIdAndUpdate(_id ,{...req.body.formData},{new : true , useFindAndModify: false});
        return res.status(200).json({User})
    } catch (error) {
        return res.status(503).json({ message: error.message })
    }
}

exports.Logout = async(req,res)=>{
    try {
        res.clearCookie("WellnessHub");
        return res.status(200).json({message:"Logout Successfull"})
    } catch (error) {
        return res.status(503).json({ message: error.message })
    }
}
exports.FetchDoctor = async(req, res)=>{
    try {
        const user = req.user;
        return res.status(200).json({user})
    } catch (error) {
        return res.status(503).json({ message: error.message })
    }
}

exports.fetchAllDoctors= async(req, res) =>{
    try {
        const Doctors = await DoctorSchema.find({});
        return res.status(200).json({Doctors});
    } catch (error) {
        return res.status(503).json({ message: error.message })
    }
}

exports.fetchDoctorbyId = async(req, res)=>{
    try {
        const {_id} = req.params;
        await DoctorSchema.findById({_id}).then((Doctor)=>{
            return res.status(200).json({Doctor});
        })
        
    } catch (error) {
        console.log(error.message);
        return res.status(503).json({ message: error.message })
    }
}
