import { Router } from "express";
import { Order } from "../../models/order/order.models.js";

const router = Router();

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export { router as deleteOrderRouter };
