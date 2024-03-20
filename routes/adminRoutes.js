import express from "express";
import { authAdmin, logoutAdmin, registerAdmin } from "../controller/adminController.js";
const router = express.Router();


router.post('/',registerAdmin);
router.post('/auth',authAdmin)
router.post('/logout',logoutAdmin)


export default router;