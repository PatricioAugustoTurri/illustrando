import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductType } from "@/types/ProductType"
import { Caprasimo } from "next/font/google"
import { useRouter } from "next/navigation"

type ProductCardProps = {
    product: [ProductType]
}
const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

export default function IllustrazioniPersonalizzate(props: ProductCardProps) {
    const { product } = props
    const router = useRouter()
    console.log(product)

    return (
        <div className={`${caprasimo.className} max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10`}>
            <p className="text-3xl text-center">Illustrazione Personalizzata</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-8 px-6">
                {product?.map((item: ProductType) => {
                    const { portada,id } = item
                    return (
                        <div key={id} className="cursor-pointer">
                            <Carousel className="mb-2">
                                <CarouselContent>
                                    {portada.map((i) => {
                                        return(
                                            <CarouselItem className="relative" key={i.url}>
                                                <img 
                                                src={`${i.url}`} 
                                                alt={item.productName} className="aspect-square object-cover hover:scale-105 transition duration-700 ease-in-out border"
                                                onClick={()=>router.push(`/category/${item.category.slug}/${item.slug}`)}
                                                />
                                            </CarouselItem>
                                        )
                                    })}
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-2" />
                                <CarouselNext className="absolute right-2" />
                            </Carousel>
                            <p className="text-xs">{item.productName}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}