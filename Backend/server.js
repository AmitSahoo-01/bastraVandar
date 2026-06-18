import app from './src/app.js';
import connectDB from './src/config/database.js';

connectDB();

app.listen(3000,()=>{
    console.log("Tension mat lee server chal raha hai");
});

