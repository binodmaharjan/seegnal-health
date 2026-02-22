import { Router } from "express";
import { drugController } from "./drug.container";
import { authorize } from "../../middleware/authorize";

const router = Router();

router.get("/", drugController.getAllDrugs);

export default router;
