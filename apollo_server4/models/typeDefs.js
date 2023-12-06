import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    products: [Product] #return array of product.
    product(id: ID): Product #return Product with specific ID
    categories: [Category] #return array of category
    category: [Category]  #return array of categories instead of returing Category with specifi ID
                          #This is because of construncting the categorytree, we need to return all the category.
    tags: [Tag] #return array of category
    tag(id: ID): Tag  # return single category
    cloudImages(folder: String): [cloudImage]
  }
  
  type cloudImage {
    public_id: String
    width: Int
    height: Int
  }

  type Product {
		id: Int
    name: String
    slug: ID
    price: Float
    sale_price: Float
    short_description: String
    stock: Int
    ratings: Int
    reviews: Int
    sale_count: Int
    is_new: Boolean
    is_hot: Boolean
    is_out_of_stock: Boolean
    is_sale: Boolean
    rated: String
    until: String
    variants: [Variant]
    large_pictures: [Media]
    pictures: [Media]
    small_pictures: [Media]
    categories: [Category]
    tags: [Tag]
  }

  type Category {
    id: Int
    name: String
    slug: String
    description: String
    type: String
    parent: Int
    media_id: Int
    count: Int
    media: CatMedia
  }

  type Tag {
    id: Int
    name: String
    slug: String
    description: String
    type: String
    created_at: String
    updated_at: String
    count: Int
  }

  type Variant {
    price: Float
    sale_price: Float
    size: Size
    color: Color
  }

  type Size {
    name: String
    size: String
  }

  type Color {
    name: String
    color: String
  }

  type Media {
    url: String
    width: Int
    height: Int
  }
  
  type CatMedia {
    public_id: String,
    width: Int,
    height: Int
  }



  input ProductInput {
        id: Int
        name: String
        slug: ID
        price: Float
        sale_price: Float
        short_description: String
        stock: Int
        ratings: Int
        reviews: Int
        sale_count: Int
        is_new: Boolean
        is_hot: Boolean
        is_out_of_stock: Boolean
        is_sale: Boolean
        rated: String
        until: String
        variants: [VariantInput]
        large_pictures: [MediaInput]
        pictures: [MediaInput]
        small_pictures: [MediaInput]
        categories: [CategoryInput]
        tags: [TagInput]
  }


input VariantInput {
    price: Float
    sale_price: Float
    size: SizeInput
    color: ColorInput
}

input SizeInput {
  name: String
  size: String
}

input ColorInput {
  name: String
  color: String
}

input MediaInput {
  url: String
  width: Int
  height: Int
}

input CategoryInput {
  id: Int
  name: String
  slug: String
  description: String
  type: String
  parent: Int
  media_id: Int
  count: Int
  media: CatMediaInput
}

input CatMediaInput {
  public_id: String,
  width: Int,
  height: Int
}

input TagInput {
    id: Int
    name: String
    slug: String
    description: String
    type: String
    created_at: String
    updated_at: String
    count: Int
  }

# Mutation
type Mutation {
  createProduct(input: ProductInput!): Product
  updateProduct(id: ID, input: ProductInput!): Product
  updateCategory(id: ID, input: CategoryInput!): Category
  createCategory(input: CategoryInput!): Category
  deleteCategory(id: ID): Category
  updateTag(id: ID, input: TagInput!): Tag
  createTag(input: TagInput!): Tag
  deleteTag(id: ID): Tag
}
`;

export default typeDefs;