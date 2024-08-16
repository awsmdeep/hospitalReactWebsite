import express from "express"
import { patientRegister } from "../controllers/user.controllers.js";

const router=express.Router()

router.post("/patient/register",patientRegister)


export default router;