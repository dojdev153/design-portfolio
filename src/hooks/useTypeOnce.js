import { useState, useEffect } from 'react'

export default function useTypeOnce(text, speed = 70) {
    const [displayed, setDisplayed] = useState('')

    useEffect(() => {
        if (displayed.length >= text.length) return
        const t = setTimeout(() => {
            setDisplayed(text.slice(0, displayed.length + 1))
        }, speed)
        return () => clearTimeout(t)
    }, [displayed, text, speed])

    return displayed
}
