import { Router } from "express";
import { Order } from "../../models/order/order.models.js";

const router = Router();

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id).populate("items.productID");
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export { router as getOrderRouter };
