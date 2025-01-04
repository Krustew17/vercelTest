import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.json({ message: "hello world!" });
});
router.get("/again", (req, res) => {
    res.json({ message: "Your api works just fine!" });
});

export default router;
