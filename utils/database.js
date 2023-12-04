import mongoose from "mongoose";
let isConnected = false;
export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('=> using existing database connection');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_DB,
            
        });
        isConnected = true;
        console.log('=> DB connected');
    } catch (error) {
        console.log(error)
    }
}