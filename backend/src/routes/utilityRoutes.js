import { Router } from "express";
import proofReadEmail from "../controllers/proofReadController.js";
const router = new Router();

router.post("/email-proofread", proofReadEmail);

export default router;
