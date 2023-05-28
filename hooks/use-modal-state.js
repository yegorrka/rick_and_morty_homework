import { useState } from "react"

export const useModalState = () => {

    const [isOpen, setIsOpen] = useState(false)

    const onOpen = () => setIsOpen(true)

    const onClose = () => setIsOpen(false)

    const onToggle = () => setIsOpen(prev => !prev)

    return {
        isOpen,
        onOpen,
        onClose,
        onToggle,
    }

}
