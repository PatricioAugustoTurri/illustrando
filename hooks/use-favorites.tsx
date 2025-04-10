import { ProductType } from "@/types/ProductType"
import { X } from "lucide-react"
import { toast } from "sonner"
import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface CartStore {
    favorite: ProductType[],
    addFavorite: (data: ProductType) => void,
    removeFavorite: (id: number) => void,
    removeAllFavorites: () => void,
}

export const useFavorites = create(persist<CartStore>((set, get) => ({
    favorite: [],

    addFavorite: (data: ProductType) => {
        const currentItems = get().favorite
        const existingItem = currentItems.find(item => item.id === data.id)

        if (existingItem) {
            return toast("Il prodotto è già presente nelle tue favorite", {
                action: {
                    label: <X size={20} strokeWidth={2} />,
                    onClick: () => { }
                }
            })
        }
        set({ favorite: [...get().favorite, data], })
        toast("Aggiunto alle tue favorite", {
            action: {
                label: <X size={20} strokeWidth={2} />,
                onClick: () => { }
            }
        })
    },

    removeFavorite: (id: number) => {
        set({ favorite: get().favorite.filter((item) => item.id !== id) })
        toast("Rimosso dalle tue favorite", {
            action: {
                label: <X size={20} strokeWidth={2} />,
                onClick: () => { }
            }
        })
    },

    removeAllFavorites: () => { set({ favorite: [] }) },
}), {
    name: "favorites-storage",
    storage: createJSONStorage(() => localStorage),
}
))