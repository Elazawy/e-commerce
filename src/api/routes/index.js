import { Router } from "express";
import { Category } from "../../models/category/category.models.js";
import { NotFoundError } from "../../../core/errors/Errors.js";
import { orderRouter } from "./orders/index.js";

const router = Router();

const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const category = await Category.findByIdAndUpdate(id,{ name : name, description : description },);
        if (!category) {
            throw new NotFoundError("category not found");
        }
        await category.save();
        res.status(204).json()
    } catch (error) {
        res.status(error.statusCode).json({
            message: error.message,
        });
    }
};

router.put("/:id", updateCategory);
router.use("/orders", orderRouter);

export { router as updateCategoryRouter };