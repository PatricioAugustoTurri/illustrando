import axios from "axios"

export const makePaymentsRequest = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        Authorization: "Bearer" + process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    }
})
