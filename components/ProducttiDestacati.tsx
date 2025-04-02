"use client"
import { useGetDestacati } from "@/api/getDestacati";
import { Response } from "@/types/Response";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { ProductType } from "@/types/ProductType";
import { Expand, Heart } from "lucide-react";
import { Caprasimo } from "next/font/google";
import { useRouter } from "next/navigation";
import IconButton from "./icon-button";

export const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

function ProducttiDestacati() {
    const { result, loading }: Response = useGetDestacati()
    const router = useRouter()

    return (
        <div className="w-full py-4 sm:py-8 sm:px-20 mx-auto">
            <h3 className={`${caprasimo.className} px-6 text-3xl sm:pb-8`}>Prodotti più amati</h3>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {loading && <p>Caricamento...</p>}
                    {result !== null && (
                        result?.map((product: ProductType) => {
                            return (
                                <CarouselItem key={product.id} className="basis-1/2 lg:basis-1/3 group">
                                    <div className="p-2">
                                        <Card className="border py-4 border-gray-200 shadow-none">
                                            <CardContent className="relative flex items-center justify-center">
                                                <img
                                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.image[0].url}`}
                                                    alt={product.productName}
                                                    className="aspect-square rounded-sm object-cover"
                                                />
                                                <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                                                    <div className="flex justify-center items-center gap-4">
                                                        <IconButton 
                                                        onclick={()=>{}}
                                                        icon={<Heart size={20}/>}
                                                        className="text-gray-600"/>
                                                        <IconButton
                                                        onclick={()=>{{router.push(`/category/${product.category.slug}/${product.slug}`)}}}
                                                        icon={<Expand size={20}/>}
                                                        className="text-gray-600"
                                                        />
                                                    </div>
                                                </div>
                                            </CardContent>
                                            <div className="flex justify-between gap-4 px-8">
                                                <h3 className="text-xs">{product.productName}</h3>
                                            </div>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })
                    )}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
    )
}

export default ProducttiDestacati;