const UserSchema = require("../Models/user.model")
const DoctorSchema = require("../Models/doctor.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const salt = 10;

exports.RegisterUser = async (req, res) => {
    try {
        const { name, password, confirmPassword, email } = req.body.formData;
        //Checking if user already exists in the database or not
        if (!name || !password || !confirmPassword || !email) return res.status(422).send({ error: "Please fill all fields" });
        const isExist = await UserSchema.findOne({ email });
        if (isExist) return res.status(400).send('Email Already Exists');
        // checking passwords are matching or not
        const isPassMatch = (password == confirmPassword);
        if (!isPassMatch) return res.status(400).send('Please enter Correct Password')
        //Creating a new user and saving it to the database
        await UserSchema.create({ name, email, password: await bcrypt.hash(password, salt) }).then(async (data) => {
            const GenrateTokens = await jwt.sign({ data }, process.env.SECRET_KEY)
            res.cookie('WellnessHub', GenrateTokens);
            console.log(data);
            return res.status(200).json({ message: "Registeration SuccessFull", GenrateTokens,data:user })
        })
    } catch (error) {
        console.log(error);
        return res.status(503).json({ message: error.message })
    }
}

exports.LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body.formData;
        //Finding the user from the Db
        const user = await UserSchema.findOne({ email }) || await DoctorSchema.findOne({ email })
        if (!user) return res.status(400).send('Invalid Email Id / Password ')

        //Verifying the password using bcrypt compareSync function
        const IsValidPassword = await bcrypt.compareSync(password, user.password)

        if (!IsValidPassword) return res.status(400).json({ message: 'Invalid Email Id / Password' });
        //Generate token for the user after successful login
        const GenrateTokens = await jwt.sign({ user }, process.env.SECRET_KEY)
        res.cookie('WellnessHub', GenrateTokens);
        return res.status(200).json({ message: "Logged In Succesfully!", GenrateTokens,user })

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
exports.FetchUser = async(req, res)=>{
    try {
        const user = req.user;
        return res.status(200).json({user})
    } catch (error) {
        return res.status(503).json({ message: error.message })
    }
}