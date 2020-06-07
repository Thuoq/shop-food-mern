const User = require("../models/user.model");
exports.userSuccess = async (req,res) => {
   await User.create(req.body)
   res.status(200).json({
       messenger :  'User Add'
   })
}

exports.userLoginSuccess =  (req,res) => { 
    res.status(200).json({
        messenger: "Success OK",
        user : res.locals.user
    })
}