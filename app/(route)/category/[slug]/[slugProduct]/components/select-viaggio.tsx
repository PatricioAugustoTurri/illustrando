import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import useCart from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { ProductType } from "@/types/ProductType"
import { Euro, Heart, MoveRight } from "lucide-react"
import { useState } from "react"

export type SelectViaggioProps = {
    product: ProductType
}

function SelectViaggio(props: SelectViaggioProps) {
    const [selectSize, setSelectSize] = useState(false)
    const [selectPrice, setSelectPrice] = useState(false)
    const { product } = props
    const { addItem } = useCart()
    const {addFavorite} = useFavorites ()

    const priceSelected = (value: string) => {
        if (value === "1-3") {
            product.price = 100
        } else if (value === "4-6") {
            product.price = 150
        }
    }
    const allCarrello = (product: ProductType) => {
        if (product.size === null) {
            setSelectSize(true)
        }
        if (product.price === null) {
            setSelectPrice(true)
        }
        if (product.size !== null && product.price !== null) {
            addItem(product)
        }
    }

    const selectSelected = (value: string) => {product.size = value, setSelectSize(false)}

    const selectSelected2 = (value: string) => {priceSelected(value), setSelectPrice(false)}

    return (
        <div>
            <Select onValueChange={(value) => selectSelected(value)}>
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
            <Select onValueChange={(value) => selectSelected2(value)}>
                <SelectTrigger className="w-full my-4">
                    <SelectValue placeholder="Formato" />
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sceglie il formato</SelectLabel>
                            <SelectItem value="1-3">1 - 3 {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}100</SelectItem>
                            <SelectItem value="4-6">4 - 6 {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}150</SelectItem>
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
                <Heart
                    strokeWidth={1}
                    size={50}
                    className="transition duration-300 ease-in-out cursor-pointer hover:fill-black"
                    onClick={() => addFavorite(product)}
                />
            </div>
        </div>
    )
}

export default SelectViaggio