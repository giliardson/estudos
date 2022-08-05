function fatorial(x){
    var fat = 1
    for (x; x > 1; x--){
        fat *= x
    }
    return fat
}

console.log(fatorial(3))