"use client"
import { useGetCategory } from "@/api/getCategory"
import { CategoryType } from "@/types/CategoryType"
import { Response } from "@/types/Response"
import { Caprasimo } from "next/font/google"
import { useRouter } from "next/navigation"
export const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

export default function TutteCategorie() {

    const { result, loading }: Response = useGetCategory()
    const router = useRouter()

    return (
        <div className="max-w-6xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <h1 className={`${caprasimo.className} text-3xl text-center`}>Tutte le categorie</h1>
            {loading && <p>Caricamento...</p>}
            <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-4">
                {result !== null && (
                    result?.map((cat: CategoryType) => {
                        return (
                            <div key={cat.id} onClick={() => router.push(`/category/${cat.slug}`)} className="cursor-pointer">
                                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${cat.image[0].url}`} alt={cat.nameCategory} className="aspect-square object-cover hover:scale-95 hover:shadow-2xl rounded-xl transition-all duration-300" />
                                <h2 className={`${caprasimo.className} text-xs my-2 text-center md:text-start`}>{cat.nameCategory}</h2>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}