import { Router } from 'express';
import userController from "../controllers/userController";
const router = Router();

router.get("/users", userController.getUsers);
router.get("/users/inactive", userController.getInactiveUsers);

export default router;
