import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    const [i, setI] = useState(0)
    return {
        scale,
        i,
        start() {
            if (!animated) {
                var currScale = scale
                var j = (1 - i)
                setAnimated(true)
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                        setI(j)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
    }
}

export const useStyle = (w, h, scale) => {
    const size = Math.min(w, h) / 8
    const fixedX = w / 2 - size / 2
    const fixedY = h / 2 - size / 2
    const position = 'absolute'
    const sf = sinify(scale)
    const width = `${size}px`
    const height = `${size}px`
    const background = '#6200ea'
    return {
        getBlockStyle(i) {
            const si = 1 - 2 * i
            const x = fixedX * (1 + si * divideScale(sf, 1, 2))
            const y = fixedY * (1 + si * divideScale(sf, 0, 2))
            console.log("fixedX", fixedX, "si", si, "sf", sf, "w", w, "h", h, "fixedY", fixedY)
            const left = `${x}px`
            const top = `${y}px`
            return {position, background, width, height, left, top}
        }
    }
}
