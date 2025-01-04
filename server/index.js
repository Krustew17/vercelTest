import * as dotenv from "dotenv";
import express from "express";

import appConfig from "./config/appConfig.js";

dotenv.config();

const app = express();
appConfig(app);

// app.listen(config.port, () => {
//     console.log(`Server running on port ${config.port}`);
// });

export default app;
