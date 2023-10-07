import express from "express";
import {signIn, signUp} from '../controllers/auth.controller.js'


const router = express.Router();

router.use("/signup",signUp);
router.use("/signin",signIn);


export default router;