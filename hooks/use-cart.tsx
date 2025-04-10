import { ProductType } from "@/types/ProductType"
import { X } from "lucide-react"
import { toast } from "sonner"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface CartStore {
    items: ProductType[],
    addItem: (data: ProductType) => void,
    removeItem: (id: number) => void,
    removeAll: () => void,
}

export const useCart = create(persist<CartStore>((set, get) => ({
    items: [],

    addItem: (data: ProductType) => {
        const currentItems = get().items
        const existingItem = currentItems.find(item => item.id === data.id)

        if (existingItem) {
            return toast("Il prodotto è già presente nel carrello", {
                action: {
                    label: <X size={20} strokeWidth={2} />,
                    onClick: () => { }
                }
            })
        }

        set({
            items: [...get().items, data]
        })
        toast("Aggiunto al carrello", {
            action: {
                label: <X size={20} strokeWidth={2} />,
                onClick: () => { }
            }
        })
    },

    removeItem: (id: number) => {
        set({ items: [...get().items.filter(item => item.id !== id)] })
        toast("Rimosso dal carrello", {
            action: {
                label: <X size={20} strokeWidth={2} />,
                onClick: () => { }
            }
        })
    },

    removeAll: () => set({ items: [] }),
}), {
    name: "cart-storage",
    storage: createJSONStorage(() => localStorage),
}))


export default useCart