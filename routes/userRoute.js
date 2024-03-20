import express from "express";
import { authUser, registerUser } from "../controller/userController.js";
const router = express.Router();


router.post('/',registerUser);
router.post('/auth',authUser);



export default router;