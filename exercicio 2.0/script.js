function verificar(){
    var data = new Date()
    var ano = data.getUTCFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.lengh == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','criança_menino.png' )
            }else if(idade < 18){
                //jovem
                img.setAttribute('src', 'adolescente_homen.png')
            }else if(idade < 59){
                //adulto
                img.setAttribute('src','homem.png' )
            }else{
                //idoso
                img.setAttribute('src','homen_idoso.png' )
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','criança_menina.png' )
            }else if(idade < 18){
                //jovem
                img.setAttribute('src','adolescente_mulher.png' )
            }else if(idade < 59){
                //adulto
                img.setAttribute('src','mulher.png' )
            }else{
                //idoso
                img.setAttribute('src','mulher_idosa.png' )
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}