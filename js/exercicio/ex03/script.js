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
            if (idade >=0 && idade <=10 ){
                //crianca
                foto = 'imagem/homem-bebe.png'
            }
        } else{
            generoMarcado = 'Feminina'
            if (idade >=0 && idade <=10 ){
                //crianca
                foto = 'imagem/mulher-bebe.png'
            }
        }

        resultado.innerHTML = `<p>Pessoa ${generoMarcado} com ${idade} anos detectada</p> <img src= ${foto}>`
    }
    }