import express from 'express';
import CookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import passport from "passport";
import {Strategy as GoogleStrategy} from "passport-google-oauth20";
import { config } from './config/config.js';

import authRoutes from './routes/auth.routes.js';

const app = express();


app.use(express.json());
app.use(CookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));

//  CORS setup
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}));


//  Google oauth and passport.js setup
app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID:config.GOOGLE_CLIENT_ID,
    clientSecret:config.GOOGLE_CLIENT_SECRET,
    callbackURL:"/api/auth/google/callback",
}, 
(accessToken,refreshToken,profile,done)=>{
    return done(null,profile);
}));




app.get('/',(req,res)=>{
    res.send("Hnn bhai sabb ok hai");
});

//  all routes here
app.use('/api/auth',authRoutes);


export default app;