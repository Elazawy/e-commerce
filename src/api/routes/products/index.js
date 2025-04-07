import { Router } from "express";
import { createProductRouter } from "./create_product.routes.js";
import { deleteProductRouter } from "./delete_product.routes.js";
import { GetProductRouter } from "./get_product.routes.js";
import { GetProductsRouter } from "./get_all_products.routes.js";
import { updateProductRouter } from "./update_product.routes.js";


const router = Router()

router.use(createProductRouter)
router.use(deleteProductRouter)
router.use(GetProductRouter)
router.use(GetProductsRouter)
router.use(updateProductRouter)

export { router as productsRouter }
