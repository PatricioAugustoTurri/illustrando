import { Separator } from "@/components/ui/separator"
import { ProductType } from "@/types/ProductType"
import { Caprasimo } from "next/font/google"

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
                        {product.image.map((item: any) => {
                            return (
                                <div key={item.id} className="flex flex-col justify-start items-start p-1">
                                    <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item.url}`} alt={product.productName} className="w-[90%]" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="w-1/2 h-full flex flex-col">
                    <div className="px-10">
                        <h1 className={`${ca.className} text-3xl text-start`}>{product.productName}</h1>
                        <Separator className="my-4" />
                        <p>Aca va toda la descrpcion del producto, bien detallado</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TuttiProduct

