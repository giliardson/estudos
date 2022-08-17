function contar(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var tela = document.getElementById('tela')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0){
        tela.innerHTML = '<p class="erro">FALTA DADOS</p>'
    } else{
        tela.innerHTML = '<p>contando: </p>'
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if (passo <= 0){
            alert('passo invalido [considerando valor 1]')
            passo = 1
        }
        
        if(inicio < fim){
            for(var c = inicio; c<=fim; c += passo){
                tela.innerHTML += `${c} `
            }
        } else {
            for(var c = inicio; c >= fim; c -= passo){
                tela.innerHTML += `${c} `
            } 
        }
        tela.innerHTML += 'fim'
    }
}