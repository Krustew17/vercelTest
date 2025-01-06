import * as dotenv from "dotenv";

const nodeEnv = process.env.NODE_ENV || "development";

const envFound = dotenv.config({ path: `../.env` });

if (envFound.error && nodeEnv == "development") {
    throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
    // Database URI
    MongoDB_URI: process.env.MONGO_URI,

    // Port used by the server
    port: parseInt(process.env.APP_PORT),

    // JWT secret key
    jwtSecret: process.env.JWT_SECRET,

    // API
    api: {
        prefix: "/api",
    },
};
