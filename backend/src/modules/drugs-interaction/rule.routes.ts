import { Router } from "express";
import { ruleController } from "./rule.container";
import { authorize } from "../../middleware/authorize";

const router = Router();

router.post("/", ruleController.analyse);

export default router;
