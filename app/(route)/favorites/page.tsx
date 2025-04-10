"use client"
import { useFavorites } from "@/hooks/use-favorites"
import { ProductType } from "@/types/ProductType"
import { HeartOff, X } from "lucide-react"
import { Caprasimo } from "next/font/google"
import { useRouter } from "next/navigation"

export const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin", "latin-ext"],
})

function FavoritesPage() {
    const { favorite, removeAllFavorites, removeFavorite } = useFavorites()
    const router = useRouter()

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
            <h1 className={`${caprasimo.className} text-2xl md:text-3xl`}>Questi sono i tuoi prodotti preferiti</h1>
            {favorite.length === 0 ?
                <div className="h-full justify-center items-center flex-col -my-28 flex">
                    <div className="flex flex-col justify-center items-center cursor-pointer gap-4" onClick={() => { router.push("/category") }}>
                        <h1 className="text-4xl font-bold">Lista vuota</h1>
                        <div className="flex flex-col items-center gap-0.5 text-center">
                            <h2><HeartOff size={70} /></h2>
                            <span className="text-gray-500 text-xs">Non hai ancora aggiunto prodotti ai tuoi preferiti</span>
                            <span className="text-gray-500">Vai al nostro Shop</span>
                        </div>
                    </div>
                </div> :
                <>
                    <div className="flex flex-col my-8 gap-1">
                        {favorite.map((item: ProductType) => {
                            return (
                                <div
                                    key={item.id}
                                    className="flex justify-between items-center hover:bg-gray-100 p-2 rounded-xl transition-all duration-500"
                                >
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.image[0].url}`}
                                        alt={item.productName}
                                        className="w-20 h-20 rounded-xl object-cover cursor-pointer hover:scale-95 transition-all duration-500"
                                        onClick={() => { router.push(`/category/${item.category.slug}/${item.slug}`) }}
                                    />
                                    <h3 className="font-bold">{item.productName}</h3>
                                    <h2 className="sm:block hidden">{item.category.nameCategory}</h2>
                                    <X
                                        size={20}
                                        strokeWidth={2}
                                        className="cursor-pointer"
                                        onClick={() => { removeFavorite(item.id) }}
                                    />
                                </div>
                            )
                        })}
                    </div>
                    <p className="flex justify-end cursor-pointer text-red-200/75" onClick={() => removeAllFavorites()}>Sbuota {favorite.length} prodotti</p>
                </>
            }
        </div>
    )
}

export default FavoritesPage