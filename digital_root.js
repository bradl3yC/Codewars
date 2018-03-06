function digital_root(n) {
    while(n > 10) {
        n = n.toString().split("").reduce((num, i) => parseInt(num) + parseInt(i))
    }
    return n
}