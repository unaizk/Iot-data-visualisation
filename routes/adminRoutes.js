import express from "express";
import { authAdmin, getAllUsers, logoutAdmin, registerAdmin, updateUserData } from "../controller/adminController.js";
import { adminProtect } from "../middleware/adminAuthMiddleware.js";
const router = express.Router();


router.post('/',registerAdmin);
router.post('/auth',authAdmin)
router.post('/logout',logoutAdmin);
router.get('/usersList',adminProtect,getAllUsers);
router.put('/update-user',adminProtect,updateUserData)


export default router;