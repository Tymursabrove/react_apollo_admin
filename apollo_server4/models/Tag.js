import mongoose from "mongoose";

const Tag = mongoose.model("Tag", {
    id: Number,
    name: String,
    slug: String, 
    description: String,
    type: String,
    created_at: String,
    updated_at: String,
    count: Number
});


export default Tag;