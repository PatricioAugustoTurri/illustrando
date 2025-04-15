import { ProductType } from "@/types/ProductType"
import { useRouter } from "next/navigation"

interface CartItemsProps {
    product: ProductType
}

function CartItems (props: CartItemsProps) {
    const { product } = props
    const router = useRouter()
    
    return (
        <li className="flex py-6 border-b">
            <div onClick={() => router.push(`/category/${product.category.slug}/${product.slug}`)}>
                <img
                    src={`${product.image[0].url}`}
                    alt={product.productName}
                    className="w-24 h-24 overflow-hidden rounded-sm sm:w-auto sm:h-32 object-cover cursor-pointer hover:scale-95 transition duration-700 ease-in-out" />
            </div>
        </li>
    )
}

export default CartItems