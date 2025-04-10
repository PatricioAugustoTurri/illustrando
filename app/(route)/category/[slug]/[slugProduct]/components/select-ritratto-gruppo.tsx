import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import useCart from "@/hooks/use-cart"
import { useFavorites} from "@/hooks/use-favorites"
import { ProductType } from "@/types/ProductType"
import { Euro, Heart, MoveRight, PersonStanding } from "lucide-react"
import { useState } from "react"

export type SelectRitrattoGruppoProps = {
    product: ProductType
}

function SelectRitrattoGruppo(props: SelectRitrattoGruppoProps) {
    const { product } = props
    const [isFormat, setIsFormat] = useState(false)
    const [valueFormat, setValueFormat] = useState("")
    const [isPrezzo, setIsPrezzo] = useState(false)
    const [valuePrezzo, setValuePrezzo] = useState("")
    const { addItem } = useCart()
    const { addFavorite } = useFavorites()

    const alCarro = (product: ProductType) => {
        if (valueFormat === "") {
            setIsFormat(true)
        }
        if (valuePrezzo === "") {
            setIsPrezzo(true)
        }
        if (valueFormat !== "" && valuePrezzo !== "") {
            product.size = valueFormat
            product.price = parseInt(valuePrezzo)
            addItem(product)
        }
    }

    return (
        <div>
            <Select onValueChange={(value) => { setIsFormat(false), setValueFormat(value) }}>
                <SelectTrigger className="w-full my-4">
                    <SelectValue placeholder="Formato" />
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
            {isFormat && <p className="text-red-500 text-xs -my-2">Per favore seleziona un formato</p>}
            <Select onValueChange={(value) => { setIsPrezzo(false), setValuePrezzo(value) }}>
                <SelectTrigger className="w-full my-4">
                    <SelectValue placeholder="Prezzo" />
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Quantita di persone</SelectLabel>
                            <SelectItem value="90">7{<PersonStanding strokeWidth={4} />}{<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}90</SelectItem>
                            <SelectItem value="100">8{<PersonStanding strokeWidth={4} />} {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}100</SelectItem>
                            <SelectItem value="110">9{<PersonStanding strokeWidth={4} />} {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}110</SelectItem>
                            <SelectItem value="120">10{<PersonStanding strokeWidth={4} />} {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}120</SelectItem>
                            <SelectItem value="130">11{<PersonStanding strokeWidth={4} />} {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}130</SelectItem>
                            <SelectItem value="140">12{<PersonStanding strokeWidth={4} />} {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}140</SelectItem>
                            <SelectItem value="150">13{<PersonStanding strokeWidth={4} />}{<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}150</SelectItem>
                            <SelectItem value="160">14{<PersonStanding strokeWidth={4} />} {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}160</SelectItem>
                            <SelectItem value="170">15{<PersonStanding strokeWidth={4} />} {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}170</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </SelectTrigger>
            </Select>
            {isPrezzo && <p className="text-red-500 text-xs -my-2">Per favore seleziona la quantita di persone</p>}
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

export default SelectRitrattoGruppo