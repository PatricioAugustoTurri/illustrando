import { cn } from "@/lib/utils"

interface IconButtonProps {
    onclick: () => void,
    icon: React.ReactElement
    className?: string
}

export default function IconButton(props: IconButtonProps) {
    const { icon, onclick, className } = props
    return (
        <button
            onClick={onclick}
            className={cn("rounded-full flex items-center border bg-white shadow-md hover:scale-110 transition p-2", className)}
        >
            {icon}
        </button>
    )
}
