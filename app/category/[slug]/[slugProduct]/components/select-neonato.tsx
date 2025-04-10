import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import useCart from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { ProductType } from "@/types/ProductType"
import { Heart } from "lucide-react"
import { useState } from "react"

export type SelectNeonatoProps = {
    product: ProductType
}

function SelectNeonato(props: SelectNeonatoProps) {
    const { product } = props
    const [selectSize, setSelectSize] = useState(false)
    const { addItem } = useCart()
    const {addFavorite} = useFavorites ()

    const selectSelected = (value: string) => {
        product.size = value;
        setSelectSize(false) 
    }

    const allCarrello = (product: ProductType) => {
        if (product.size === null) {
            setSelectSize(true)
            console.log("no size")
        }
        if (product.size !== null && product.price !== null) {
            console.log(product)
            /*Funcion para el carrito*/
            addItem(product)
        }
    }
    return (
        <div>
            <Select onValueChange={(value)=>{selectSelected(value)}}>
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

export default SelectNeonato