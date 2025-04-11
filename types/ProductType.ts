export type ProductType = {
    cant: number,
    id: number,
    productName: string,
    slug: string,
    image: [{
        url: string
    }],
    description: string,
    price: number,
    category: {
        id: number,
        categoryName: string,
        slug: string,
        description: string,
        image: {
            url: string
        },
    }
    size: string,
    portada:[{
        url: string
    }]
}