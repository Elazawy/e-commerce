import { Router } from "express";
import { Order } from "../../models/order/order.models.js";

const router = Router();

router.post("/", async (req, res) => {
    const { customerName, items, totalAmount, status } = req.body;
    try {
        const order = new Order({ customerName, items, totalAmount, status });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export { router as createOrderRouter };
