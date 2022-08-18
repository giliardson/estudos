dado = []
function adicionar(){
    var num = document.getElementById('numero').value
    var tela = document.getElementById('tela')
    
    if (num.length == 0 || num <= 0 || num > 100){
        alert('valor em branco ou invalido')
    } else {
        if (dado.indexOf(Number(num)) == -1){
            tela.innerHTML += `valor ${num} adicionado<br>`
            dado.push(Number(num))
        } else{
            alert('valor ja existe')
        }
    }
    document.getElementById('finalizar').innerHTML='<p>[...]</p>'
}

function finalizar(){
    var telaf = document.getElementById('finalizar')
    var tamanho = dado.length
    var total = 0
    
    for(var x=0;x<tamanho;x++){
        total += dado[x]
        if (x==0){
            var maior = dado[x]
            var menor = dado[x]
        } else if (dado[x] > maior){
            maior = dado[x]
        } else if (dado[x] < menor){
            menor = dado[x]
        }
    }
    
    //---------------

    telaf.innerHTML = `
    <p class="inf">
    Posue ${tamanho} elementos <br>
    Maior valor ${maior} <br>
    menor valor ${menor} <br>
    Soma de todos os valores vale ${total} <br>
    Media dos valores ${total/tamanho}
    </p>`
}