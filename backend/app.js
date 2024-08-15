import express, { urlencoded } from "express"
import {config} from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/message.router.js"
import { ApiError } from "./middleware/ApiError.js";

const app=express();
config({
    path:"./.env"
})

app.use(cors({
    origin:[process.env.FRONTEND_URL_ONE,process.env.DASHBOARD_URL],
    methods:["GET","PUT","POST","DELETE"],
    credentials:true,

}))

app.use(cookieParser());
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));


app.use("/api/v1/message",messageRouter);


dbConnection();

app.use(ApiError)
export default app;
