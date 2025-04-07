import { Router } from "express";
import { Order } from "../../models/order/order.models.js";

const router = Router();

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { customerName, items, totalAmount, status } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(
            id,
            { customerName, items, totalAmount, status },
            { new: true, runValidators: true }
        );
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export { router as updateOrderRouter };
