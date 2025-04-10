"use client"
import { Heart, HeartOff, ShoppingBasketIcon, ShoppingCart, UserRoundMinus } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuWindow from "./MenuWindow";
import MenuMobile from "./MenuMobile";
import { Vibur } from "next/font/google";
import { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import { useFavorites } from "@/hooks/use-favorites";

export const bonbon = Vibur({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"]
})

function Navbar() {

    const router = useRouter()
    const [shadow, setShadow] = useState(false)
    const { items } = useCart()
    const { favorite } = useFavorites()

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className={`fixed flex justify-between items-center w-full h-32 lg:px-32 md:px-16 sm:px-8 px-4 top-0 left-0 z-50 customColorOliverBg ${shadow ? 'shadow-2xl' : ''}`}>
            <div className="flex md:hidden">
                {/*Moviele*/}
                <MenuMobile />
            </div>
            <div className={`${bonbon.className} cursor-pointer justify-center items-center text-center text-white`} onClick={() => router.push("/")}>
                <h1 className=" lg:text-4xl text-2xl">Illustrando</h1>
                <h2 className="lg:text-4xl text-2xl">ad occhi chiusi</h2>
            </div>
            <div className="hidden md:flex">
                {/*windows*/}
                <MenuWindow />
            </div>
            <div className="flex gap-4 text-white">
                {items.length === 0 ?
                    <ShoppingCart strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/cart")} /> :
                    <div className="flex items-center gap-0.5 cursor-pointer" onClick={() => router.push("/cart")} >
                        <ShoppingBasketIcon strokeWidth={1} />
                        <span className="text-xs">{items.length}</span>
                    </div>}
                {favorite.length === 0 ?
                    <HeartOff strokeWidth={1} className="cursor-pointer" onClick={() => router.push("/favorites")} /> :
                    <div className="cursor-pointer flex items-center gap-0.5" onClick={() => router.push("/favorites")} >
                        <Heart strokeWidth={1} />
                        <span className="text-xs">{favorite.length}</span>
                    </div>}
            </div>
        </div>
    )
}

export default Navbar;