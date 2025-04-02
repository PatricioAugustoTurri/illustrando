"use client"
import { Menu } from "lucide-react";
import { Caprasimo } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

export const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"],
})

function MenuMobile() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>
            <Menu
                strokeWidth={2}
                size={30}
                className="cursor-pointer text-white"
                onClick={() => { setDrawerOpen(!drawerOpen) }}
            />
            <div className={`fixed top-0 left-0 h-full w-64 customColorLilacBg text-black transform transition-transform duration-500 ease-in-out z-50
            ${drawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col p-10 gap-10">   
                    <Link href={"/"} className={`hover:font-bold text-xl text-white ${caprasimo.className}`} onClick={() => { setDrawerOpen(false) }}>Home</Link>
                    <Link href={"/stampe"} className={`hover:font-bold text-xl text-white ${caprasimo.className}`} onClick={() => { setDrawerOpen(false) }}>Shop</Link>
                    <Link href={"/about"} className={`hover:font-bold text-xl text-white ${caprasimo.className}`} onClick={() => { setDrawerOpen(false) }}>About</Link>
                    <Link href={"/contact"} className={`hover:font-bold text-xl text-white ${caprasimo.className}`} onClick={() => { setDrawerOpen(false) }}>Contatto</Link>
                </div>
            </div>
            {drawerOpen! && <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={() => { setDrawerOpen(false) }}></div>}
        </div>
    )
}

export default MenuMobile;