import * as dotenv from "dotenv";
import express from "express";

import appConfig from "./config/appConfig.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

appConfig(app);

if (process.env.NODE_ENV === "development") {
    app.listen(process.env.APP_PORT, () => {
        console.log(`Server running on port ${process.env.APP_PORT}`);
    });
}

export default app;
