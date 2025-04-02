import { useEffect, useState } from "react"

export function useGetDestacati() {

    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`

    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(()=>{
        (async()=>{
            try {
                const res = await fetch(url)
                const data = await res.json()
                setResult(data.data)
                setLoading(false)
            }catch(erorr:any){
                setError(erorr)
                setLoading(false)

            }
        })()
    },[url])

    return {result, loading, error}
}