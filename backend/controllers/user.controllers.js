import {catchAsyncError} from "../middleware/catchAsyncError.js"
import {ErrorHandler} from "../middleware/ApiError.js"
import {User} from "../models/user.models.js"
import  {generateToken} from "../utils/jwtTokens.js"


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
    generateToken(user,"user registered",200,res)
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
    generateToken(user,"user logged in successfully",200,res)


})

export const addNewAdmin =catchAsyncError(async(req,res,next)=>{
    const {firstName,lastName,email,phone,password,gender,dob,nic}=req.body
    if(!firstName || !lastName || !email || !phone || !password || !gender || !dob || !nic ){
        return next(new ErrorHandler("please fill full form",400))
    }
    const isRegistered= await User.findOne({email});
    if(isRegistered){
        return next(new ErrorHandler(`${isRegistered.role} already exists!!`))
    }
    const admin=await User.create({firstName,lastName,email,phone,password,gender,dob,nic,role:"Admin"});
    res.status(200).json({
        success:true,
        message:"New Admin Registered!"
    })

})