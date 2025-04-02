"use client"
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../../../components/ui/select";


function SubNavbar() {
    const router = useRouter()

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-auto">
            <div className=" hidden md:grid md:grid-cols-4 gap-2 justify-center items-center text-center content-center">
                <h1 onClick={() => router.push('/stampe')} className="cursor-pointer hover:bg-amber-200 hover:text-black py-1 transition-all duration-500 ease-in-out rounded-2xl">Stampe</h1>
                <h1 onClick={() => router.push('/illustrazione-personalizzata')} className="cursor-pointer hover:bg-amber-200 hover:text-black py-1 transition-all duration-500 ease-in-out rounded-2xl">Illustrazione personalizzata</h1>
                <h1 onClick={() => router.push('/ritratto-illustrato')} className="cursor-pointer hover:bg-amber-200 hover:text-black py-1 transition-all duration-500 ease-in-out rounded-2xl">Ritratto illustrato</h1>
                <h1 onClick={() => router.push('/legno')} className="cursor-pointer hover:bg-amber-200 hover:text-black py-1 transition-all duration-500 ease-in-out rounded-2xl">Legno</h1>
            </div>
            <div className="md:hidden justify-center items-center flex">
                <Select onValueChange={(value) => router.push(`/${value}`)}>
                    <SelectTrigger className="w-[200px] text-xl cursor-pointer border-none shadow-none hover:shadow-2xl transition-all duration-500 ease-in-out">
                        <SelectValue placeholder="Tutti i prodotti" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Tutti i prodotti</SelectLabel>
                        <SelectItem value="stampe">Stampe</SelectItem>
                        <SelectItem value="illustrazione-personalizzata">Illustrazione personalizzata</SelectItem>
                        <SelectItem value="ritratto-illustrato">Ritratto illustrato</SelectItem>
                        <SelectItem value="legno">Legno</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

export default SubNavbar;