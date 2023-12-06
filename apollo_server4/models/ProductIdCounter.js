import mongoose from "mongoose";

const ProductIdCounter = mongoose.model("IdCounter", {
    id: { type: String, required: true },
    seq: { type: Number, default: 0 }
})

export default ProductIdCounter;