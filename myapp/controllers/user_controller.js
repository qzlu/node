const user=require('../models/user');
const getUser=async (req,res,next)=>{
    let users=await user.find();
    res.send(users)
}
module.exports={
    getUser
}