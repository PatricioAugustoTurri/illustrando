"use client"
import { useGetProduct } from "@/api/getProduct"
import { Response } from "@/types/Response"
import TuttiProduct from "./components/tutti-product"
import { ProductType } from "@/types/ProductType"
import TuttiProductMobile from "./components/tutti-product-mobile"
import { useParams } from "next/navigation"

function ProductPage() {
    const params = useParams()
    const { slugProduct } = params
    const { loading, result }: Response = useGetProduct(slugProduct as string)

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="block sm:hidden">
                {loading && <p>Caricamento...</p>}
                {result?.map((product: ProductType) => {
                    return (
                        <div key={product.id}>
                            <TuttiProductMobile product={product} />
                        </div>
                    )
                })}
            </div>
            <div className="hidden sm:block">
                {loading && <p>Caricamento...</p>}
                {result?.map((product: ProductType) => {
                    return (
                        <div key={product.id}>
                            <TuttiProduct product={product} />
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ProductPage