var agora = new Date()
var hora = agora.getHours()
console.log(`agora sao exatamente ${hora} horas`)
if (hora < 12){
    console.log('BOM DIA')
} else if (hora >= 12 && hora < 18){
    console.log('BOA TARDE')
}else{
    console.log('BOA NOITE')
}