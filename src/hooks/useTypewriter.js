import { useState, useEffect } from 'react'

export default function useTypewriter(words, typingSpeed = 80, deletingSpeed = 45, pauseTime = 2000) {
    const [displayed, setDisplayed] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isPausing, setIsPausing] = useState(false)

    useEffect(() => {
        const current = words[wordIndex]

        if (isPausing) {
            const pause = setTimeout(() => setIsPausing(false), pauseTime)
            return () => clearTimeout(pause)
        }

        if (!isDeleting && displayed === current) {
            // Finished typing — pause then start deleting
            setIsPausing(true)
            setIsDeleting(true)
            return
        }

        if (isDeleting && displayed === '') {
            // Finished deleting — move to next word
            setIsDeleting(false)
            setWordIndex(prev => (prev + 1) % words.length)
            return
        }

        const timeout = setTimeout(() => {
            setDisplayed(prev =>
                isDeleting
                    ? prev.slice(0, -1)                // delete one char
                    : current.slice(0, prev.length + 1) // type one char
            )
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [displayed, isDeleting, isPausing, wordIndex, words])

    return displayed
}
