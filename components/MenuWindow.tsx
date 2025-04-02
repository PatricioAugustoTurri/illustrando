"use client"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Caprasimo } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

function MenuWindow() {
    const router = useRouter()

    return (
        <div className=" flex gap-4 justify-center items-center">
            <Link href={"/"} className={`${caprasimo.className} cursor-pointer text-lg customColorFlamingo`}>Home</Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className={`cursor-pointer bg-transparent text-lg customColorFlamingo ${caprasimo.className}`}>Shop</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="flex flex-col gap-2 px-8 py-2 justify-center items-center text-center text-lg">
                                <p className="cursor-pointer" onClick={() => router.push('/stampe')}>Stampe</p>
                                <p className="cursor-pointer" onClick={() => router.push('/illustrazione-personalizzata')}>Illustrazione personalizzata</p>
                                <p className="cursor-pointer" onClick={() => router.push('/ritratto-illustrato')}>Ritratto illustrato</p>
                                <p className="cursor-pointer" onClick={() => router.push('/legno')}>Legno</p>
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Link href={"/about"} className={`${caprasimo.className} cursor-pointer text-lg customColorFlamingo`}>About</Link>
            <Link href={"/contact"} className={`${caprasimo.className} cursor-pointer text-lg mx-4 customColorFlamingo`}>Contatto</Link>
        </div>
    )
}


export default MenuWindow;

/*
<li className="flex flex-col gap-2">
                                    <Link href="/shop" title="Shop" className="px-10 py-1 rounded-md hover:font-bold">Shop</Link>
                                    <Link href="/shop" title="Shop" className="px-10 py-1 rounded-md hover:font-bold">Shop</Link>
                                    <Link href="/shop" title="Shop" className="px-10 py-1 rounded-md hover:font-bold">Shop</Link>
                                    <Link href="/shop" title="Shop" className="px-10 py-1 rounded-md hover:font-bold">Shop</Link>
                                </li>
*/
