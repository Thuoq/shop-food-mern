const User = require("../models/user.model");
exports.userAuth =  async (req,res,next) => {
    const { email }  = req.body;
    let emailExists = await User.findOne({email: email});
    if(emailExists) { 
        res.status(400).json({
            message : "user exits"
        }) 
        return; 
    }
    next();
}