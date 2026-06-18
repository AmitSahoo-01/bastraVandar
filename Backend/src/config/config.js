import dotenv from 'dotenv';
dotenv.config();

if(!process.env.MONGO_URI){
    console.error("MONGO_URI environment variable is not defined. Please set it in the .env file.");
    process.exit(1);
}

if(!process.env.JWT_SECRET){
    console.error("JWT_SECRET environment variable is not defined. Please set it in the .env file.");
    process.exit(1);
}

export const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}