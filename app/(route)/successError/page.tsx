"use client"
import { Button } from "@/components/ui/button"
import { Meh } from "lucide-react"
import { Caprasimo } from "next/font/google"
import { useRouter } from "next/navigation"

export const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin", "latin-ext"]
})

function SuccessErrorPage() {
    const router = useRouter()
    return (
        <div className="max-w-5xl mx-auto p-4 sm:py-8 sm:px-24 h-screen">
         <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className={`${caprasimo.className} text-3xl font-bold`}>Oops! Errore nell'ordine</h1>
            <p>Non abbiamo potuto completare l'ordine. Per favore riprova più tardi.</p>
            <Meh size={100} strokeWidth={2} className="my-10"/>
            <Button className="cursor-pointer" onClick={() => {router.push("/")}}>Torna alla home</Button>
         </div>
        </div>
    )
}

export default SuccessErrorPage