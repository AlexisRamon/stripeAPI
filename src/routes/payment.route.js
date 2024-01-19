import { Router } from "express";
import { createSession } from "../controllers/payment.controller.js";

const router = Router();

router.post('/create-check-session', createSession);

export default router;