function findMissingLetter(array) {
    const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const alphaIndex = alpha.indexOf(array[0].toLowerCase())
    const isArrayCaps = array[0].toUpperCase() === array[0]

    for(let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() !== alpha[alphaIndex + i]) {
            const currentIndexInKey = alphaIndex + i
            return isArrayCaps ? alpha[currentIndexInKey].toUpperCase() : alpha[currentIndexInKey]
        }
    }
}