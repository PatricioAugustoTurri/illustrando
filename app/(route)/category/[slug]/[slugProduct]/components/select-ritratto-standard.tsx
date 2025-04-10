import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import useCart from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { ProductType } from "@/types/ProductType"
import { Euro, Heart, MoveRight } from "lucide-react"
import { useState } from "react"

export type SelectRitrattoStandardProps = {
    product: ProductType
}
function SelectRitrattoStandard(props: SelectRitrattoStandardProps) {

    const [selectSize, setSelectSize] = useState(false)
    const [selectPrice, setSelectPrice] = useState(false)
    const { product } = props
    const { addItem } = useCart()
    const { addFavorite } = useFavorites()

    const priceSelected = (value: string) => {
        if (value === "1-3") {
            product.price = 60
        } else if (value === "4-6") {
            product.price = 80
        }
    }
    const allCarrello = (product: ProductType) => {
        if (product.size === null) {
            setSelectSize(true)
            console.log("no size")
        }
        if (product.price === null) {
            setSelectPrice(true)
            console.log("no price")
        }
        if (product.size !== null && product.price !== null) {
            console.log(product)
            /*Funcion para el carrito*/
            addItem(product)
        }
    }

    return (
        <div>
            <Select onValueChange={(value) => { product.size = value, setSelectSize(false) }}>
                <SelectTrigger className="w-full my-4">
                    <SelectValue placeholder="Tipologia" />
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Standard cm</SelectLabel>
                            <SelectItem value="A5">A5 (14,8 X 21)</SelectItem>
                            <SelectItem value="A4">A4 (21 X 29,7)</SelectItem>
                            <SelectItem value="A3">A3 (29,7 X 42)</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                            <SelectLabel>Quadrato</SelectLabel>
                            <SelectItem value="20X20">20 X 20</SelectItem>
                            <SelectItem value="25X25">25 X 25</SelectItem>
                            <SelectItem value="30X30">30 X 30</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </SelectTrigger>
            </Select>
            {selectSize && <p className="text-red-500 text-xs -my-2">Per favore seleziona la Tipologia</p>}
            <Select onValueChange={(value) => { priceSelected(value), setSelectPrice(false) }}>
                <SelectTrigger className="w-full my-4">
                    <SelectValue placeholder="Formato" />
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sceglie il formato</SelectLabel>
                            <SelectItem value="1-3">1 - 3 {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}60</SelectItem>
                            <SelectItem value="4-6">4 - 6 {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}80</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </SelectTrigger>
            </Select>
            {selectPrice && <p className="text-red-500 text-xs -my-2">Per favore seleziona un formato</p>}
            <div className="flex justify-between items-center gap-4">
                <button
                    onClick={() => allCarrello(product)}
                    className="w-full h-16 rounded-xl customColorOliverBg text-white font-bold text-lg my-4 cursor-pointer hover:scale-95 transition duration-300 ease-in-out"
                >
                    Aggiungi al carrello
                </button>
                <Heart strokeWidth={1} size={50} className="transition duration-300 ease-in-out cursor-pointer hover:fill-black"
                    onClick={() => console.log(addFavorite(product))}
                />
            </div>
        </div>
    )
}

export default SelectRitrattoStandard