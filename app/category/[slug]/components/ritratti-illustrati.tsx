import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ImageType } from "@/types/images";
import { ProductType } from "@/types/ProductType";
import { Caprasimo } from "next/font/google";
import { useRouter } from "next/navigation";

type ProductCardProps = {
    product: [ProductType]
}
const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

function RitrattiIllustrati(props: ProductCardProps) {
    const { product } = props
    const router = useRouter()

    return (
        <div className={`${caprasimo.className} max-w-6xl mx-auto px-4 sm:px-6 lg:px-8`}>
            <p className="text-3xl text-center">Ritratti Illustrati</p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 mt-8 px-6">
                {product?.map((item: ProductType) => {
                    const { portada } = item
                    return (
                        <div key={item.id} className="cursor-pointer">
                            <Carousel className="mb-2">
                                <CarouselContent>
                                    {portada?.map((itema) => {
                                        return(
                                            <CarouselItem key={itema.url} className="relative">
                                                <img 
                                                src={`${itema.url}`} 
                                                alt={item.productName} className="w-full h-full object-cover hover:scale-105 transition duration-700 ease-in-out"
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

export default RitrattiIllustrati;

/*

  <div key={item.id}>
                            <img 
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.portada[0].url}`} 
                            alt={item.productName} 
                            className="rounded-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
                            />
                            <p className="text-xs">{item.productName}</p>
                        </div>

*/