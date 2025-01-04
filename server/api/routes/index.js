import config from "../../config/index.js";
import testRoutes from "./test.js";

const prefix = config.api.prefix;

const registerRoutes = (app) => {
    app.use(`${prefix}/test`, testRoutes);
    // app.use(
    //     `${prefix}/users`,
    //     middlewares.verifyToken,
    //     middlewares.attachUser,
    //     userRoutes,
    // );
    app.get("/", (req, res) => res.json({ message: "ONE LAST CHECK HEHE" }));
    app.get("/hehe", (req, res) => res.json({ message: "MAZNA BE BATIOO!" }));
};

export default registerRoutes;
