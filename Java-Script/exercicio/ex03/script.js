function verificar(){
    var resultado = document.getElementById('res')
    var ano = new Date().getFullYear()
    var anoNacimento = Number(document.getElementById('anoNacimento').value)
    if (anoNacimento == 0 || ano < anoNacimento){
        alert('Verifique os dados')
    } else{
        var idade = ano - anoNacimento
        var genero = document.getElementsByName('genero')
        var generoMarcado = ''
        var foto = ''
        if(genero[0].checked){
            generoMarcado = 'Maculina'
            if (idade >=0 && idade <10 ){
                //crianca
                foto = 'imagem/homem-bebe.png'
            } else if (idade < 20){
                //jovem
                foto = 'imagem/homem-jovem.png'
            } else if (idade < 55){
                //adulto
                foto = 'imagem/homem-adulto.png'
            } else{
                //velho
                foto = 'imagem/homem-velho.png'
            }
        } else{
            generoMarcado = 'Feminina'
            if (idade >=0 && idade <10 ){
                //crianca
                foto = 'imagem/mulher-bebe.png'
            } else if (idade < 20){
                //jovem
                foto = 'imagem/mulher-jovem.png'
            } else if (idade < 55){
                //adulto
                foto = 'imagem/mulher-adulta.png'
            } else{
                //velho
                foto = 'imagem/mulher-velho.png'
            }
        }

        resultado.innerHTML = `<p>Pessoa ${generoMarcado} com ${idade} anos detectada</p> <img src= ${foto}>`
    }
    }