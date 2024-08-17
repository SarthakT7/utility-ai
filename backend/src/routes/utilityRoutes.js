import { Router } from "express";
import generateJson from "../controllers/generateJsonController.js";
import proofReadEmail from "../controllers/proofReadController.js";
import checkGrammar from "../controllers/checkGrammarController.js";
const router = new Router();

router.post("/email-proofread", proofReadEmail);
router.post("/generate-json", generateJson);
router.post("/check-grammar", checkGrammar);
export default router;
