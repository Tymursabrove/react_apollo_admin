import mongoose from "mongoose";

const Category = mongoose.model("Category", {
    id: Number,
    name: String,
    slug: String, 
    description: String,
    type: String,
    parent: Number,
    media_id: Number,
    count: Number,
    media: {
        public_id: String,
        width: Number,
        height: Number
    }
});


export default Category;