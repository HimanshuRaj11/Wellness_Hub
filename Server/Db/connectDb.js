const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log(`Server id Connected with Database`);
}).catch((e)=>{
    console.log(`Connection Error : ${e.message}`);
})