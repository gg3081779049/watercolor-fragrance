export function hexToRgb(hex) {
    return hex.match(/[a-f\d]{2}/gi).map(x => parseInt(x, 16))
}

export function rgbToHsl(r, g, b) {
    r /= 255
    g /= 255
    b /= 255

    let max = Math.max(r, g, b)
    let min = Math.min(r, g, b)
    let h, s, l = (max + min) / 2

    if (max === min) {
        h = s = 0
    } else {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0)
                break
            case g:
                h = (b - r) / d + 2
                break
            case b:
                h = (r - g) / d + 4
                break
        }
        h /= 6
    }

    return [
        Math.round(h * 360),
        Math.round(s * 100),
        Math.round(l * 100)
    ]
}

export function hexToHsl(hex) {
    return rgbToHsl(...hexToRgb(hex))
}