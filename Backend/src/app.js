import express from 'express';
import CookieParser from 'cookie-parser';
import morgan from 'morgan';

import authRoutes from './routes/auth.routes.js';

const app = express();


app.use(express.json());
app.use(CookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send("Hnn bhai sabb ok hai");
});

app.use('/api/auth',authRoutes);


export default app;