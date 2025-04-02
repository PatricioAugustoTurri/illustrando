"use client"
import { useGetCategoriesPro } from "@/api/getCategotiesPro";
import { ProductType } from "@/types/ProductType";
import { Response } from "@/types/Response";
import Link from "next/link";
import { useParams } from "next/navigation";

function TutteCategoria() {
    const params = useParams()
    const { result, loading }: Response = useGetCategoriesPro(params.category as string)
    console.log(result)

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
                {loading && <p>Caricamento...</p>}
                {result !== null && (
                    result?.map((product: ProductType) => {
                        return (
                            <div key={product.id}>
                                <Link
                                    href={`/${product.category.slug}/${product.slug}`}
                                >
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.image[0].url}`}
                                        alt={product.productName}
                                        className="sm:aspect-square object-cover rounded-lg hover:scale-95 transition duration-300 ease-in-out aspect-auto hover:shadow-2xl" />
                                </Link>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default TutteCategoria;