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


export const login=catchAsyncError(async(req,res,next)=>{
    const {email,password,confirmPassword,role}=req.body;
    if(!email || !password || !confirmPassword || !role){
        return next(new ErrorHandler("please provide all the details",400))
    }
    if(password!==confirmPassword){
        return next(new ErrorHandler("password and confirmPassword do not match"))
    }
    const user =await User.findOne({email}).select("+password")

    if(!user){
        return next(new ErrorHandler("Invalid Password or Email",400))
    }
    const isPasswordMatched=await user.comparePassword(password);
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid Password or Email",400))
    }
    if(role!==user.role){
        return next(new ErrorHandler("User with this role not found",400))
    }
    res.status(200).json({
        success:true,
        message:"User logged in Succ essfully"
    })

})