import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionString = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB Connected !! DB HOST: ${connectionString.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection Failed", error);
        process.exit(1);
    }
}

export default connectDB;