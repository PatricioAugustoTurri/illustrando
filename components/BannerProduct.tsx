"use client"
import { useGetProductsCategory } from "@/api/getProductsCategory";
import { ProductType } from "@/types/ProductType";
import { Response } from "@/types/Response";
import { Caprasimo } from "next/font/google";
import Link from "next/link";

export const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

function BannerProduct() {

    const { result, loading }: Response = useGetProductsCategory("ritratto-illustrato")

    return (
        <div className="mt-8 text-center max-w-6xl mx-auto">
            <p className={`${caprasimo.className} text-4xl`}>Ordina il tuo ritratto illustrato</p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3  mt-10 px-6">
                {loading && <p>Caricamento...</p>}
                {result?.map((product: ProductType) => {
                    const { category, slug, id, productName, portada } = product
                    return (
                        <Link href={`/category/${category.slug}/${slug}`} key={id}>
                            <img src={`${portada[0].url}`} alt={productName} className="aspect-square object-cover rounded-lg hover:scale-95 transition duration-300 ease-in-out" />
                            <div className="py-1 flex justify-between">
                                <p className={`${caprasimo.className} text-xs`}>{productName}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default BannerProduct