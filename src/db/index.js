import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const mongoConnection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`MongoDB connected!! \nDB HOST: ${mongoConnection.connection.host}`)
    } catch (e) {
        console.error("MongoDB connection ERROR: ", e)
        process.exit(1)
    }
}

export default connectDB