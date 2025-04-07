import { Router } from "express";
import { Product } from "../../models/products/product.model.js";

const router = Router();

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { price, name, description, image, rating, brand } = req.body;

    try {
        const product = await Product.findByIdAndUpdate(id, { price, name, description, image , rating, brand});
        if (!category) {
            throw new NotFoundError("category not found");
        }
        await product.save();
        res.status(204).json()
    } catch (error) {
        res.status(error.statusCode).json({
            message: error.message,
        });
    }
};

router.put("/:id", updateProduct);

export { router as updateProductRouter };