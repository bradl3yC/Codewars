function findOutlier(integers){
    let odds = []
    let evens = []
    for(let i = 0; i < integers.length; i++) {
        if ((integers[i] % 2 === 0) || (integers[i] === 0)) {
            evens.push(integers[i])
        } else {
            odds.push(integers[i])
        }
    }
    return evens.length > 1 ? odds[0] : evens[0]
}