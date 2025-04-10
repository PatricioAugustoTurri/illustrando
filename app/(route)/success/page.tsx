"use client"
import { Button } from "@/components/ui/button"
import { Caprasimo } from "next/font/google"
import Image from "next/image"
import { useRouter } from "next/navigation"

export const capa = Caprasimo ({
   weight:["400"],
   style:["normal"],
   subsets:["latin"]
})

function SuccessPage() {
   const rouster = useRouter()
   return (
      <div className="max-w-5xl mx-auto p-4 sm:py-8 sm:px-24 h-screen">
         <div className="flex flex-col-reverse gap-2 sm:flex-row">
            <div className="flex justify-center md:min-w-[400px]">
               <Image src="/setlla.jpg" alt="success" width={250} height={500} className="rounded-xl object-cover" />
            </div>
            <div>
               <h1 className={`${capa.className} text-3xl font-bold`}>Grazie per il tuo ordine</h1>
               <p className="my-3">En breve nuetro equipo se pondrá manos a la obra.</p>
               <p className="my-3">Gracias por confiar en nosotros.</p>
               <p className="my-3">Que tengas un gran día.</p>
               <Button onClick={() => { rouster.push("/") }} className="cursor-pointer">Volver al HOME</Button>
            </div>
         </div>
      </div>
   )
}

export default SuccessPage