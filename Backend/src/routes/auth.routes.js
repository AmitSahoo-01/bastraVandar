import { Router } from 'express';
import { validateRegisterUser, validateLoginUser } from '../validators/auth.validator.js';
import { registerUser, loginUser, googleAuthController } from '../controllers/auth.controller.js';
import passport from 'passport';

const router = Router();

router.post("/register", validateRegisterUser, registerUser);

router.post("/login", validateLoginUser, loginUser);

//  google oauth routes here 

router.get("/google", passport.authenticate("google",{
    scope:["profile","email"]
}));

router.get("/google/callback", passport.authenticate("google",{
    session:false,
    failureRedirect:"http://localhost:5173/login",  
}),googleAuthController);

export default router;