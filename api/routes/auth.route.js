import express from "express";
import {signIn, signUp,google, signOut} from '../controllers/auth.controller.js'


const router = express.Router();

router.use("/signup",signUp);
router.use("/signin",signIn);
router.use("/google",google);
router.get("/signout", signOut);


export default router;