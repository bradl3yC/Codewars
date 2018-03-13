function tribonacci(signature,n){
    if (n === 0) {
        return []
    }
    if (n === 1) {
        return [signature[0]]
    }
    if (n === 2) {
        return [signature[0], signature[1]]
    }
    while (signature.length < n) {
        let nextInt = signature[signature.length - 1] + signature[signature.length - 2] + signature[signature.length - 3]
        signature.push(nextInt)
    }
    return signature
}