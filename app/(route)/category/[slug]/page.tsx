"use client"
import { useParams } from "next/navigation";
import RitrattiIllustrati from "./components/ritratti-illustrati";
import { useGetProductsCategory } from "@/api/getProductsCategory";
import { Response } from "@/types/Response";
import IllustrazioniPersonalizzate from "./components/illustrazione-personalizzata";

function categoryPage() {
    const params = useParams()
    const { slug } = params
    const { result, loading }: Response = useGetProductsCategory(slug as string)


    if (slug === "ritratto-illustrato") {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <RitrattiIllustrati product={result} />
            </div>
        )
    } else if (slug === "illustrazione-personalizzata") {
        return (
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <IllustrazioniPersonalizzate product={result} />
            </div>

        )
    } else if (slug === "stampe") {
        return (
            <div>
                <p>Tutte le stampe</p>
            </div>
        )
    } else {
        return (
            <div>
                <p>Tutte Legni</p>
            </div>
        )
    }
}

export default categoryPage;