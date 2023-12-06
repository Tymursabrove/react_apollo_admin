import { gql} from '@apollo/client'

const DEMO = 1

const PRODUCT_SIMPLE = gql`
    fragment ProductSimple on Product {
        name
        slug
        price
        ratings
        reviews
        is_hot
        is_new
        is_out_of_stock
        until
        stock
        pictures {
            url
            width
            height
        }
        small_pictures {
            url
            width
            height
        }
        categories {
            name
            slug
        }
        variants {
            price
            sale_price
        }
    }
`;

export const GET_PRODUCTS = gql`
    query products($search: String $colors: [String], $sizes: [String], $brands: [String], $min_price: Int, $max_price: Int, $category: String, $tag: String, $sortBy: String, $from: Int, $to: Int, $list: Boolean = false) {
        products(demo: ${DEMO}, search: $search, colors: $colors, sizes: $sizes, brands: $brands, min_price: $min_price, max_price: $max_price, category: $category, tag: $tag, sortBy: $sortBy, from: $from, to: $to ) {
            data {
                short_description @include(if: $list)
                ...ProductSimple
            }
            total
            categoryFamily {
                slug
                name
            }
        }
    }
    ${ PRODUCT_SIMPLE }
`