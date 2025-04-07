export function formatPrice(price: number) {
    const priceFormated = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "EUR",
    })

    const finalPrice = priceFormated.format(price)

    return finalPrice
}