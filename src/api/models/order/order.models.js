import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        customerName: { type: String, required: true },
        items: [
            {
                productID: { type: mongoose.Schema.Types.ObjectId, ref: "product", required: true },
                quantity: { type: Number, required: true },
            },
        ],
        status: {
            type: String,
            enum: ["Pending", "Delivered"],
            default: "Pending",
        },
    },
    { timestamps: true }
);

export const Order = mongoose.model("order", orderSchema);
