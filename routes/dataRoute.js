import express from "express";
import { dataFetching } from "../controller/dataController.js";
const router = express.Router();



router.get('/data',dataFetching); 


export default router;