import express from "express"
import { getAllAppointments, postAppointment } from "../controllers/appointment.controllers.js";
import { isAdminAuthenticated, isPatientAuthenticated } from "../middleware/auth.js";

const router=express.Router()

router.post("/post",isPatientAuthenticated,postAppointment)
router.get("/getall",isAdminAuthenticated,getAllAppointments)


export default router;