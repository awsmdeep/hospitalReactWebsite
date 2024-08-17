import express from "express"
import { addNewAdmin, login, patientRegister } from "../controllers/user.controllers.js";

const router=express.Router()

router.post("/patient/register",patientRegister)
router.post("/login",login)
router.post("/admin/addnew",addNewAdmin)



export default router;