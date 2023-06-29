import { Router } from 'express';
import orderController from "../controllers/orderController";
const router = Router();

router.get("/orders", orderController.getOrders);
router.post("/orders", orderController.createOrder);
router.get("/orders/:orderId", orderController.getOrder);

export default router;
