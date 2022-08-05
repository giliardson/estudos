var num = [2, 3, 6, 5, 8, 7, 9 ,4]
/*for(var p = 0; p < num.length; p++){
    console.log(`posicao ${p} = ${num[p]}`)
}*/

for(var p in num){
    console.log(`${p} => ${num[p]}`)
}