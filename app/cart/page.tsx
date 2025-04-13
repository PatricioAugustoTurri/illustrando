"use client"
import { Separator } from "@/components/ui/separator"
import useCart from "@/hooks/use-cart"
import { formatPrice } from "@/lib/formatPrice"
import { MoveRight, ShoppingBag, SquareX } from "lucide-react"
import { useRouter } from "next/navigation"
import CartItems from "./components/cart-items"
import { Button } from "@/components/ui/button"
import { loadStripe } from "@stripe/stripe-js"
import { makePaymentsRequest } from "@/api/payments"
import { Caprasimo } from "next/font/google"

const caprasimo = Caprasimo({
    weight: ["400"],
    style: ["normal"],
    subsets: ["latin"]
})

function CartPage() {
    const { removeAll, items, removeItem } = useCart()
    const router = useRouter()
    const prices = items.map((product) => product.price * product.cant);
    const totalPrice = prices.reduce((a, b) => a + b, 10)
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

    const buyStripe = async () => {
        try {
            const stripe = await stripePromise
            const res = await makePaymentsRequest.post("/api/orders", {
                products: items,
                price: totalPrice
            })

            await stripe?.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
            removeAll()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8 h-auto md:h-screen">
            <h1 className={`${caprasimo.className} text-4xl`}>Il tuo carrello</h1>
            <div className="grid md:grid-cols-2 sm:gap-5">
                <div>
                    {items.length === 0 && (
                        <div className="flex my-10 justify-center items-center">
                            <div className="flex flex-col justify-center items-center cursor-pointer gap-4" onClick={() => { router.push("/category") }}>
                                <h1 className="text-3xl font-bold">Lista vuota</h1>
                                <div className="flex flex-col items-center gap-0.5 text-center">
                                    <h2><ShoppingBag size={70} /></h2>
                                    <span className="text-gray-500 text-xs">Non hai ancora aggiunto prodotti ai tuoi carrelli</span>
                                    <span className="text-gray-500">Vai al nostro Shop</span>
                                </div>
                            </div>
                        </div>
                    )}
                    <ul>
                        {items.map((item) => {
                            return (
                                <div key={item.id} >
                                    <div className="flex justify-between">
                                        <CartItems product={item} />
                                        <div className="flex flex-col">
                                            <p className="md:text-2xl text-lg my-6">{item.productName}</p>
                                            <div className="flex gap-1 text-sm">
                                                <p>Cantidad:</p>
                                                <p>{item.cant}</p>
                                            </div>
                                            <div className="flex gap-1 text-sm items-center">
                                                <p>Tamaño:</p>
                                                <p>{item.size}</p>
                                                <MoveRight />
                                                <p>{formatPrice(item.price)}</p>
                                            </div>
                                            <div className="flex gap-1 text-sm items-center">
                                                <p>Precio:</p>
                                                <p>{formatPrice(item.price * item.cant)}</p>
                                            </div>
                                        </div>
                                        <SquareX className="w-6 h-6 cursor-pointer flex my-6 hover:fill-black duration-300 hover:text-white" onClick={() => removeItem(item.id)} />
                                    </div>
                                    <Separator className="my-2 sm:my-0" />
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className="max-w-xl py-4 sm:py-0">
                    <div className="p-6 rounded-lg bg-slate-100">
                        <p className="mb-1 text-lg font-semibold">Order Sumary</p>
                        <p className="mb-3 text-xs">Spedizione: {formatPrice(10)}</p>
                        <Separator />
                        <div className="flex justify-between gap-5 my-4">
                            <p>Order Total</p>
                            <p>{formatPrice(totalPrice)}</p>
                        </div>
                        <div className="flex items-center justify-center w-full mt-3">
                            <Button className="w-full cursor-pointer" onClick={buyStripe}>Comprar</Button>
                        </div>
                    </div>
                    {items.length !== 0 && <p className="text-end my-2 text-red-500/70 cursor-pointer text-xs" onClick={() => removeAll()}>Svuota carrello</p>}
                </div>
            </div>
        </div>
    )
}

export default CartPage
