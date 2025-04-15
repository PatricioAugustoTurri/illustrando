import { Separator } from "@/components/ui/separator"
import { ProductType } from "@/types/ProductType"
import { Caprasimo } from "next/font/google"
import SelectViaggio from "./select-viaggio"
import SelectNeonato from "./select-neonato"
import SelectRitrattoGruppo from "./select-ritratto-gruppo"
import SelectIllustrazioneStandard from "./select-illustrazione-standard"
import SelectRitrattoAbbraccio from "./select-ritratto-abbraccio"
import SelectRitrattoStandard from "./select-ritratto-standard"
import { ImageType } from "@/types/images"

type ProductsProps = {
    product: ProductType
}
const ca = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

function TuttiProduct(props: ProductsProps) {
    const { product } = props

    return (
        <div className="flex flex-col py-10">
            <div className="flex">
                <div className="w-1/2 overflow-y-scroll">
                    <div className="h-[100vh]">
                        {product.image.map((item:ImageType) => {
                            const { id, url } = item
                            return (
                                <div key={id} className="flex flex-col justify-start items-start p-1">
                                    <img src={`${url}`} alt={product.productName} className="w-[90%] object-cover" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col">
                    <div className="px-10">
                        <h1 className={`${ca.className} text-3xl text-start`}>{product.productName}</h1>
                        <Separator className="my-4" />
                        <p>{product.description}</p>
                        <Separator className="my-4" />
                        {product.slug === "illustrazione-di-viaggio" && <SelectViaggio product={product}/>}
                        {product.slug === "neonato" && <SelectNeonato product={product}/>}
                        {product.slug === "ritratto-di-gruppo" && <SelectRitrattoGruppo product={product}/>}
                        {product.slug === "illustrazione-standard" && <SelectIllustrazioneStandard product={product}/>}
                        {product.slug === "ritratto-abbraccio" && <SelectRitrattoAbbraccio product={product}/>}
                        {product.slug === "ritratto-standard" && <SelectRitrattoStandard product={product}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TuttiProduct

