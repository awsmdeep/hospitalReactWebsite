
import { catchAsyncError } from "../middleware/catchAsyncError.js";
import { Message } from "../models/message.models.js";
import { ErrorHandler } from "../middleware/ApiError.js";



export const sendMessage=catchAsyncError(async(req,res,next)=>{
    const {firstName,lastName,email,phone,message}=req.body;
    if(!firstName || !lastName || !email || !phone || !message){
       return next(new ErrorHandler("please fill full form ",400))
    }
    await Message.create( {firstName,lastName,email,phone,message});
    res.status(200).json({
     success:true,
     message:"Message Send Succesfully"
    })
})

export const getAllMessages=catchAsyncError(async(req,res,next)=>{
    const messages=await Message.find()
    res.status(200).json({
        success:true,
        messages
    })
})