import {catchAsyncError} from "../middleware/catchAsyncError.js"
import {ErrorHandler} from "../middleware/ApiError.js"
import {User} from "../models/user.models.js"



export const patientRegister= catchAsyncError(async(req,res,next)=>{
    const {firstName,lastName,email,phone,password,gender,dob,nic,role}=req.body
    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !nic || !role){
        return next(new ErrorHandler("please fill full form",400))
    }

    let user=await User.findOne({email});
    if(user){
        return next(new ErrorHandler("user already registered",400));
    }
    user=await User.create({firstName,lastName,email,phone,password,gender,dob,nic,role});
    res.status(200).json({
        success:true,
        message:"user registered"
    })
})