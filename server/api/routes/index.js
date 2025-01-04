import config from "../../config/index.js";
import testRoutes from "./test.js";

const prefix = config.api.prefix;

const registerRoutes = (app) => {
    app.use(`${prefix}`, testRoutes);
    // app.use(
    //     `${prefix}/users`,
    //     middlewares.verifyToken,
    //     middlewares.attachUser,
    //     userRoutes,
    // );
};

export default registerRoutes;
