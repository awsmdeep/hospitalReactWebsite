import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getDoctors,
  getUsersDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controllers/user.controllers.js";
import {
  isAdminAuthenticated,
  isPatientAuthenticated,
} from "../middleware/auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated,addNewAdmin);
router.get("/doctors", getDoctors);
router.get("/admin/me", isAdminAuthenticated, getUsersDetails);
router.get("/patient/me", isPatientAuthenticated, getUsersDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);

export default router;
