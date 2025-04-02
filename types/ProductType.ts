export type ProductType = {
    cant: number,
    id: number,
    productName: string,
    slug: string,
    image: {
        url: string
    }[],
    description: string,
    price: number,
    category: {
        id: number,
        nameCategory: string,
        slug: string,
        description: string,
        image: {
            url: string
        },
    }
    size: string,
    subCategoryName:{
        subCategoryName: string,
        slug: string,
        id: number,
        description: string,
        images:{
            url: string
        }[]
    }
}