import express from "express";
import { authAdmin, deleteUser, getAdminIotDatas, getAllUsers, logoutAdmin, registerAdmin, updateUserData } from "../controller/adminController.js";
import { adminProtect } from "../middleware/adminAuthMiddleware.js";
const router = express.Router();


router.post('/',registerAdmin);
router.post('/auth',authAdmin)
router.post('/logout',logoutAdmin);
router.get('/usersList',adminProtect,getAllUsers);
router.put('/update-user',adminProtect,updateUserData);
router.delete('/delete-user',adminProtect,deleteUser);
router.get('/admin-iot-datas',adminProtect,getAdminIotDatas)


export default router;