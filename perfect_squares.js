function findNextSquare(sq) {
    const isSquare = (number) => {
        return number > 0 && Math.sqrt(number) % 1 === 0
    }
    if (!isSquare(sq)) {
        return -1
    } else {
        let nextNum = sq + 1
        while(!isSquare(nextNum)) {
            nextNum++
        }
        return nextNum
    }
}