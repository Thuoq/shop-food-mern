const User  = require("../models/user.model");

exports.authUserLogin = async (req,res,next) => {
    const {email, password} = req.body;
    let exitsUser = await User.findOne({email : email});
    if(exitsUser.password !== password) {
        res.json({
            messenger: "Wrong password"
        })
    }
    res.locals.user = exitsUser
    next();
}