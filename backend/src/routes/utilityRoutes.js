import { Router } from "express";
import generateJson from "../controllers/generateJsonController.js";
import proofReadEmail from "../controllers/proofReadController.js";
const router = new Router();

router.post("/email-proofread", proofReadEmail);
router.post("/generate-json", generateJson);
export default router;
