function tabuada(){
    var numero = window.document.getElementById('numero').value
    var tela = document.getElementById('tela')

    if (numero.length == 0){
        tela.innerHTML = '<p class="erro">Campo em branco</p>'
    } else{
        var n = Number(numero)
        tela.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            tela.innerHTML += `${n} x ${c} = ${n*c}<br>`
        }
    }
}