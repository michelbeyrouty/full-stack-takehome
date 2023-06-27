import { Router } from 'express';
import orderController from "../controllers/orderController";
const router = Router();

router.get("/orders", orderController.getOrders);

export default router;
