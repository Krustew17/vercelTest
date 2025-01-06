import mongoose from "mongoose";

import config from "./index.js";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(config.MongoDB_URI);

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;
