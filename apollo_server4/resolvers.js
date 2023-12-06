import Product from "./models/Product.js";
import Category from "./models/Category.js";
import ProductIdCounter from "./models/ProductIdCounter.js";
import Tag from "./models/Tag.js";
import cloudinaryM from 'cloudinary';

const myconfig = cloudinaryM.v2.config({
  cloud_name: 'dhkg3aqid',
  api_key: '163272943232593',
  api_secret: 'b2489BBq2KGJ4T5lqtU3BV-aJv4',
  secure: true
});

cloudinaryM.v2.api.config
// GraphQL Resolvers
const resolvers = {
    Query: {
        products: async () => {
            const rlt = await Product.find({});
            console.log(rlt);
            return rlt;
        },
        product: async (parent, args) => {
            const rslt = await Product.findOne({ "id": args.id }).exec();
            return rslt;
        },
        categories: async () => await Category.find({}),
        // category: async (parent, args) => {
        //     const rslt = await Category.findOne({ "id": args.id }).exec();
        //     return [rslt];
        // }
        category: async () => await Category.find({}),
        tags: async () => await Tag.find({}),
        tag: async (parent, args) => await Tag.findOne({ "id": args.id }),
        cloudImages: async (parent, args) => {
            let value = [];
            console.log("server foldeer", args.folder);
            
            var prefix = 'admin/' + args.folder + "/";
            if (args.folder == "gallery_pictures") { 
                prefix = "admin/medium"
            }
            if (args.folder == "gallery_small_pictures") { 
                prefix = "admin/small"
            }
            if (args.folder == "gallery") { 
                prefix = "admin/large"
            }
            console.log("server prefix", prefix);
            await cloudinaryM.v2.api.resources({ type: 'upload', prefix: prefix, max_results:100 }).then((res) => {
                
                value = res.resources.map((row) => ({
                    public_id : row.public_id,
                        width : parseInt(row.width),
                        height : parseInt(row.height)
                }))
            }).catch((err) => console.error(err))
            console.log("server final", value);
            return value;
        } 
    },
    Mutation: {
        createProduct: async (parent, args) => {
            const number = await ProductIdCounter.findOneAndUpdate({ "id": "product" }, { $inc: { seq: 1 } }, { new: true }).exec();
            const cats = args.input.categories;
            const tags = args.input.tags;
            let customCategory = cats.map((cat) => { 
                return {
                    id: cat.id,
                    name: cat.name? cat.name: '',
                    slug: cat.slug? cat.slug: '',
                    description: cat.description? cat.description: '',
                    _type: cat.type? cat.type: '',
                    parent: cat.parent?cat.parent:0,
                    media_id: cat.media_id?cat.media_id:0,
                    count: cat.count?cat.count:0,
                    media: {
                        id: cat.media.id?cat.media.id:0,
                        name: cat.media.name?cat.media.name:'',
                        _type: cat.media.type?cat.media.type:'',
                        copy_link: cat.media.copy_link?cat.media.copy_link:'',
                        size: cat.media.size?cat.media.id:0,
                        width: cat.media.width?cat.media.width:0,
                        height: cat.media.height?cat.media.height:0,
                        alt_text: cat.media.alt_text?cat.media.alt_text:'',
                        description: cat.media.description?cat.media.description:'',
                        created_at: cat.media.created_at?cat.media.created_at:'',
                        uploaded_by: cat.media.uploaded_by?cat.media.uploaded_by:''
                    }
                }
            })
            let customTag = tags.map((cat) => { 
                return {
                    id: cat.id,
                    name: cat.name,
                    slug: cat.slug, 
                    description: cat.description,
                    _type: cat.type,
                    created_at: cat.created_at,
                    updated_at: cat.updated_at,
                    count: cat.count
                }
            })
            
            const newProduct = new Product({
                id: number.seq,
                name: args.input.name,
                slug: args.input.slug,
                price: args.input.price,
                sale_price: args.input.sale_price,
                short_description: args.input.short_description,
                stock: args.input.stock,
                ratings: args.input.ratings,
                reviews: args.input.reviews,
                sale_count: args.input.sale_count,
                is_new: args.input.is_new,
                is_hot: args.input.is_hot,
                is_out_of_stock: args.input.is_out_of_stock,
                rated: args.input.rated,
                until: args.input.until,
                variants: args.input.variants,
                large_pictures: args.input.large_pictures,
                pictures: args.input.pictures,
                small_pictures: args.input.small_pictures,
                categories: customCategory,
                tags: customTag
            })
            await newProduct.save();//.then(Response=> newProduct);
            return newProduct;
        },
        updateProduct: async (parent, args) => { 
            const query = await Product.findOneAndUpdate({ "id": args.id }, {
                "name": args.input.name,
                "slug": args.input.slug,
                "price": args.input.price,
                "sale_price": args.input.sale_price,
                "short_description": args.input.short_description,
                "stock": args.input.stock,
                "ratings": args.input.ratings,
                "reviews": args.input.Ireviewsnt,
                "sale_count": args.input.sale_count,
                "is_new": args.input.is_new,
                "is_hot": args.input.is_hot,
                "is_out_of_stock": args.input.is_out_of_stock,
                "rated": args.input.rated,
                "until": args.input.until,
                "variants": args.input.variants,
                "large_pictures": args.input.large_pictures,
                "pictures": args.input.pictures,
                "small_pictures": args.input.small_pictures,
                "categories": args.input.categories,
                "tags": args.input.tags
            }).exec();
            return query;
        },
        updateCategory: async (parent, args) => { 
            const query = await Category.findOneAndUpdate({ id: args.id }, {
                "id": args.input.id,
                "name": args.input.name,
                "slug": args.input.slug,
                "description": args.input.description,
                "type": args.input.type,
                "parent": args.input.parent,
                "media_id": args.input.media_id,
                "count": args.input.count,
                "media": args.input.media
            }, { new: true });
            return query;
        },
        createCategory: async (parent, args) => { 
            const number = await ProductIdCounter.findOneAndUpdate({"id": "category"}, {$inc: {seq: 1}}, {new: true}).exec();
            const newCategory = Category({
                "id": number.seq,
                "name": args.input.name,
                "slug": args.input.slug,
                "description": args.input.description,
                "type": args.input.type,
                "parent": args.input.parent,
                "media_id": args.input.media_id,
                "count": args.input.count,
                "media": args.input.media
            });
            await newCategory.save();
            return newCategory;
        },
        deleteCategory: async (parent, args) => { 
            const deletedData = Category.findOneAndRemove({ "id": args.id });
            return deletedData;
        },
        updateTag: async (parent, args) => { 
            const query = Tag.findOneAndUpdate({ "id": args.id }, { ...args.input }, { new: true });
            return query;
        },
        createTag: async (parent, args) => { 
            const number = await ProductIdCounter.findOneAndUpdate({"id": "tag"}, {$inc: {seq: 1}}, {new: true});
            const newTag = Tag({
                "id": number.seq,
                "name": args.input.name,
                "slug": args.input.slug,
                "description": args.input.description,
                "type": args.input.type,
                "created_at": args.input.created_at,
                "updated_at": args.input.updated_at,
                "count": args.input.count
            });
            await newTag.save();
            return newTag;
        },
        deleteTag: async (parent, args) => { 
            const deletedData = Tag.findOneAndRemove({ "id": args.id });
            return deletedData;
        }

        
    }
};

export default resolvers;