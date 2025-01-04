import * as dotenv from "dotenv";
import express from "express";

import appConfig from "./config/appConfig.js";

dotenv.config();

const app = express();

appConfig(app);

export default app;
