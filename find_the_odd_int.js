function findOdd(A) {
    for(let i = 0; i < A.length; i++){
        let counter = 0
        for (let j = 0; j < A.length; j++) {
            if (A[j] === A[i]) {
                counter++
            }
        }
        if (counter % 2 !== 0){
            return A[i]
        }
    }
}