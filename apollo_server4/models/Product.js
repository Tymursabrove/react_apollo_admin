import mongoose from "mongoose";

const Product = mongoose.model("Products", {
  id: Number,
  name: String,
  slug: String,
  price: Number,
  sale_price: Number,
  short_description: String,
  stock: String,
  ratings: Number,
  reviews: Number,
  sale_count: Number,
  is_new: Boolean,
  is_hot: Boolean,
  is_out_of_stock: Number,
  rated: String,
  until: String,
  variants: [{
    price: Number,
    sale_price: Number,
    size: {
      name: String,
      size: String
    },
    color: {
      name: String,
      color: String
    }
  }],
  large_pictures: [
    {
      width: Number,
      height: Number,
      url: String,
    }
  ],
  pictures: [
    {
      width: Number,
      height: Number,
      url: String,
    }
  ],
  small_pictures: [
    {
      width: Number,
      height: Number,
      url: String,
    }
  ],
  categories: [{
    id: Number,
    name: String,
    slug: String, 
    description: String,
    _type: String,
    parent: Number,
    media_id: Number,
    count: Number,
    media: {
        id: Number,
        name: String,
        _type: String,
        copy_link: String,
        size: Number,
        width: Number,
        height: Number,
        alt_text: String,
        description: String,
        created_at: String,
        uploaded_by: String
    }
  }],
  tags: [{
    id: Number,
    name: String,
    slug: String, 
    description: String,
    _type: String,
    created_at: String,
    updated_at: String,
    count: Number
  }]
});


export default Product;