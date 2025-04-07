import { Router } from "express";
import { createOrderRouter } from "./create_order.routes.js";
import { getAllOrdersRouter } from "./get_all_orders.routes.js";
import { getOrderRouter } from "./get_order.routes.js";
import { updateOrderRouter } from "./update_order.routes.js";
import { deleteOrderRouter } from "./delete_order.routes.js";

const router = Router();

router.use(createOrderRouter);
router.use(getAllOrdersRouter);
router.use(getOrderRouter);
router.use(updateOrderRouter);
router.use(deleteOrderRouter);

export { router as orderRouter };
