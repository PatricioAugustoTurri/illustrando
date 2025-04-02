"use client"
import { useGetCategory } from "@/api/getCategory";
import { CategoryType } from "@/types/CategoryType";
import { Response } from "@/types/Response";
import { Caprasimo } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

function CategoriesHome() {
    const { result, loading }: Response = useGetCategory()
    const router = useRouter()

    return (
        <div className="max-w-6xl mx-auto py-4 sm:py-16 sm:px-24">
            <h3 className={`${caprasimo.className} px-6 pb-4 text-3xl sm:pb-8 cursor-pointer`} onClick={()=>router.push("/category")}>Tutte le categorie</h3>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {!loading && result !== undefined && (
                    result?.map((category: CategoryType) => {
                        const { nameCategory, image, slug, id } = category
                        return (
                            <Link
                                key={id}
                                href={`/category/${slug}`}
                                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                            >
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                    alt={category.nameCategory}
                                    className="max-w-[200px] transition duration-300 ease-in-out rounded-lg hover:scale-110"
                                />
                                <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">{nameCategory}</p>
                            </Link>
                        )
                    })
                )}
            </div>

        </div>
    )
}

export default CategoriesHome;