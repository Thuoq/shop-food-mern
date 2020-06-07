const User = require("../models/user.model");
exports.userAuth =  async (req,res,next) => {
    const { email }  = req.body;
    let exitsEmail = await User.findOne({email: email});
    if(exitsEmail) { 
        res.status(404).send({
            status: 400,
            error: "User exits"
        })
    }
    next();
}