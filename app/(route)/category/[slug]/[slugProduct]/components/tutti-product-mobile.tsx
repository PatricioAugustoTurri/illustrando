import IconButton from "@/components/icon-button"
import { Separator } from "@/components/ui/separator"
import { ProductType } from "@/types/ProductType"
import { Expand, Heart } from "lucide-react"
import { Caprasimo } from "next/font/google"
import { useRouter } from "next/navigation"
import { useState } from "react"
import SelectViaggio from "./select-viaggio"
import SelectNeonato from "./select-neonato"
import SelectRitrattoGruppo from "./select-ritratto-gruppo"
import SelectIllustrazioneStandard from "./select-illustrazione-standard"
import SelectRitrattoAbbraccio from "./select-ritratto-abbraccio"
import SelectRitrattoStandard from "./select-ritratto-standard"

type ProductsProps = {
    product: ProductType
}
const ca = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

function TuttiProductMobile(props: ProductsProps) {
    const { product } = props
    const { image, description, productName, price, size, cant, category, slug, portada, id } = product
    const [foto, setFoto] = useState(image[0].url)

    return (
        <div className="flex flex-col">
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${foto}`} alt={productName} className="w-[70%] mb-4 mx-auto relative" />
            <div className="flex gap-2 justify-center items-center">
                {image?.map((item: any) => {
                    return (
                        <div className="flex gap-2" key={item.id}>
                            <img
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.url}`}
                                alt={productName}
                                className="w-20 h-20 object-cover cursor-pointer"
                                onClick={() => setFoto(item.url)}
                            />
                        </div>
                    )
                })}
            </div>
            <Separator className="my-8 mx-2" />
            <h1 className={`${ca.className} text-2xl text-start mb-2`}>{productName}</h1>
            <p className="text-base">aca va toda la descripcion bien detallada del producto.</p>
            <Separator className="my-4" />
            {product.slug === "illustrazione-di-viaggio" && <SelectViaggio product={product} />}
            {product.slug === "neonato" && <SelectNeonato product={product} />}
            {product.slug === "ritratto-di-gruppo" && <SelectRitrattoGruppo product={product} />}
            {product.slug === "illustrazione-standard" && <SelectIllustrazioneStandard product={product} />}
            {product.slug === "ritratto-abbraccio" && <SelectRitrattoAbbraccio product={product} />}
            {product.slug === "ritratto-standard" && <SelectRitrattoStandard product={product} />}
        </div>
    )
}

export default TuttiProductMobile