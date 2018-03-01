function gap(g, m, n) {
    let arr = []
    let counter = 0
    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false;
        return num !== 1;
    }

    for (let i = m; i <= n; i++){
        if (isPrime(i)) {
            arr.push(i)
            counter++
            if (arr.length > 1) {
                let gap = arr[1] - arr[0]
                if (g === gap) {
                    return arr
                }
                if (g !== gap) {
                    arr = [arr[1]]
                }
            }
        }
    }
    return null
}