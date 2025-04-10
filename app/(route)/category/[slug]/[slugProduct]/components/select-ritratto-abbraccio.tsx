import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import useCart from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { ProductType } from "@/types/ProductType"
import { Euro, Heart, MoveRight } from "lucide-react"
import { useState } from "react"

export type RitrattoAbbaccioProps = {
    product: ProductType
}

function SelectRitrattoAbbraccio(props: RitrattoAbbaccioProps) {
    const { product } = props
    const [isSize, setIsSize] = useState(false)
    const [isFormat, setIsFormat] = useState(false)
    const [valueSize, setValueSize] = useState("")
    const [valueFormat, setValueFormat] = useState("")
    const { addItem } = useCart()
    const { addFavorite } = useFavorites()

    const alCarro = (item: ProductType) => {
        if (valueFormat === "") {
            setIsFormat(true)
        }
        if (valueSize === "") {
            setIsSize(true)
        }
        if (valueSize !== "" && valueFormat !== "") {
            product.size = valueSize
            product.price = parseInt(valueFormat)
            addItem(product)
        }
    }
    return (
        <div>
            <Select onValueChange={(value) => { setValueSize(value), setIsSize(false) }}>
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
            {isSize && <p className="text-red-500 text-xs -my-2">Per favore seleziona la dimensione</p>}
            <Select onValueChange={(value) => { setValueFormat(value), setIsFormat(false) }}>
                <SelectTrigger className="w-full my-4">
                    <SelectValue placeholder="Formato" />
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sceglie il formato</SelectLabel>
                            <SelectItem value="60">1 - 2 {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}60</SelectItem>
                            <SelectItem value="80">3 - 4 {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}80</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </SelectTrigger>
            </Select>
            {isFormat && <p className="text-red-500 text-xs -my-2">Per favore seleziona un formato</p>}
            <div className="flex justify-between items-center gap-4">
                <button
                    onClick={() => alCarro(product)}
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

export default SelectRitrattoAbbraccio