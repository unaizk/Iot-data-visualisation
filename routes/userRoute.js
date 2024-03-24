import express from "express";
import { authUser, getIotDatas, logoutUser, registerUser } from "../controller/userController.js";
const router = express.Router();
import { protect } from "../middleware/authMiddleware.js";

router.post('/',registerUser);
router.post('/auth',authUser);
router.post('/logout',logoutUser);
router.get('/iot-datas',protect,getIotDatas)


export default router;