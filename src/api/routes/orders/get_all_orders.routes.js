import { Router } from "express";
import { Order } from "../../models/order/order.models.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const orders = await Order.find().populate("items.productID");
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export { router as getAllOrdersRouter };
