import { Router } from 'express';
import { getUser } from "../controllers/userController";
const router = Router();

router.post("/example", getUser);

export default router;
