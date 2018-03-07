var countBits = function(n) {
    return parseInt(n.toString(2).split("").reduce((acc, count) => parseInt(count) + parseInt(acc)))
};