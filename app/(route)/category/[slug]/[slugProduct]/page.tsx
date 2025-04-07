"use client"
import { useGetProduct } from "@/api/getProduct"
import { Response } from "@/types/Response"
import { useParams } from "next/navigation"
import TuttiProduct from "./components/tutti-product"
import { ProductType } from "@/types/ProductType"

function ProductPage() {
    const params = useParams()
    const { slugProduct } = params
    console.log(slugProduct)
    const { error, loading, result }: Response = useGetProduct(slugProduct as string)
    console.log(result)

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {loading && <p>Caricamento...</p>}
            {result?.map((product:ProductType)=>{
                return (
                    <div key={product.id}>
                       <TuttiProduct product={product} />
                    </div>
                )
            })}
        </div>
    )
}

export default ProductPage