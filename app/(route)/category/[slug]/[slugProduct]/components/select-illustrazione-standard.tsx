import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import useCart from "@/hooks/use-cart"
import { useFavorites } from "@/hooks/use-favorites"
import { ProductType } from "@/types/ProductType"
import { Euro, Heart, MoveRight, PersonStanding } from "lucide-react"
import { useState } from "react"

export type IllustazioneStandardProps = {
    product: ProductType
}
function SelectIllustrazioneStandard(props: IllustazioneStandardProps) {
    const { product } = props
    const [valueSize, setValuesize] = useState("")
    const [valueFormat, setValueformat] = useState("")
    const [selectSize, setSelectsize] = useState(false)
    const [selectFormat, setSelectformat] = useState(false)
    const [newSelect, setNewselect] = useState(false)
    const { addItem } = useCart()
    const {addFavorite} = useFavorites ()

    const valuta = (value: string) => {
        if (value === "1-3") {
            setValueformat("100")
            setNewselect(false)
        } else if (value === "4-6") {
            setValueformat("150")
            setNewselect(false)
        } else if (value === "+") {
            setNewselect(true)
            setValueformat("")
        }
    }

    const newValuta = (value: string) => {
        setValueformat(value)
    }


    const allCarrello = (product: ProductType) => {
        if (valueSize === "") {
            setSelectsize(true)
        }
        if (valueFormat === "") {
            setSelectformat(true)
        }
        if (valueFormat !== "" && valueSize !== "") {
            product.size = valueSize
            product.price = parseInt(valueFormat)
            addItem(product)
        }
    }

    return (
        <div>
            <Select onValueChange={(value) => { setValuesize(value), setSelectsize(false) }}>
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
            <Select onValueChange={(value) => { setValueformat(value), setSelectformat(false), valuta(value) }}>
                <SelectTrigger className="w-full my-4">
                    <SelectValue placeholder="Formato" />
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sceglie il formato</SelectLabel>
                            <SelectItem value="1-3">1 - 3 {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}100</SelectItem>
                            <SelectItem value="4-6">4 - 6 {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}150</SelectItem>
                            <SelectItem value="+">7 o più {<MoveRight strokeWidth={1} />} {<Euro strokeWidth={1} />}80 + {<Euro strokeWidth={1} />}10 per ogni{<PersonStanding strokeWidth={4} />}</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </SelectTrigger>
            </Select>
            {selectFormat && <p className="text-red-500 text-xs -my-2">Per favore seleziona un formato</p>}
            {newSelect && (
                <Select onValueChange={(value) => { setSelectformat(false), newValuta(value) }}>
                    <SelectTrigger className="w-full my-4">
                        <SelectValue placeholder="Scegli il numero di persone" />
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="90">7{<MoveRight strokeWidth={1} />}{<Euro strokeWidth={1} />}90</SelectItem>
                                <SelectItem value="100">8{<MoveRight strokeWidth={1} />}{<Euro strokeWidth={1} />}100</SelectItem>
                                <SelectItem value="110">9{<MoveRight strokeWidth={1} />}{<Euro strokeWidth={1} />}110</SelectItem>
                                <SelectItem value="120">10{<MoveRight strokeWidth={1} />}{<Euro strokeWidth={1} />}120</SelectItem>
                                <SelectItem value="130">11{<MoveRight strokeWidth={1} />}{<Euro strokeWidth={1} />}130</SelectItem>
                                <SelectItem value="140">12{<MoveRight strokeWidth={1} />}{<Euro strokeWidth={1} />}140</SelectItem>
                                <SelectItem value="150">13{<MoveRight strokeWidth={1} />}{<Euro strokeWidth={1} />}150</SelectItem>
                                <SelectItem value="160">14{<MoveRight strokeWidth={1} />}{<Euro strokeWidth={1} />}160</SelectItem>
                                <SelectItem value="170">15{<MoveRight strokeWidth={1} />}{<Euro strokeWidth={1} />}170</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </SelectTrigger>
                </Select>
            )}
            {newSelect && valueFormat === "" && <p className="text-red-500 text-xs -my-2">Per favore seleziona la quantita di persone</p>}
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
                    onClick={() => console.log(addFavorite(product))}
                />
            </div>
        </div>
    )
}

export default SelectIllustrazioneStandard