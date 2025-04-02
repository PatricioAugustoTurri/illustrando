import Link from "next/link";
import { Separator } from "./ui/separator";
import { bonbon } from "./Navbar";

function Footer() {
    const dataFooter: {id: number, title: string, href: string}[] = [
        { id: 1, title: "Home", href: "/" },
        { id: 2, title: "Shop", href: "/shop" },
        { id: 3, title: "About", href: "/about" },
        { id: 4, title: "Contact", href: "/contact" },
        { id: 5, title: "Politica de privacidad", href: "/pdv" },
    ]

    return (
        <div className="mt-4 customColorFlamingoBg">
            <div className="w-full max-w-xl mx-auto md:py-8 px-2 py-2">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className={`${bonbon.className} sm:px-4`}>
                        Illustrando
                    </p>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        {dataFooter.map ((data)=>(
                            <li key={data.id}>
                                <Link href={data.href} className="hover:underline me-4 md:me-6">
                                    {data.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Separator className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="blck text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    &copy; 2025 <Link href={"/derechos"}>Benedetta Zibetti </Link>Todos los derechos reservados
                </span>
            </div>
        </div>
    )
}

export default Footer;