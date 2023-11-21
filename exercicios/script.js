function carregar(){
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} hora(s)`
    if(hora >= 0 && hora < 12){
        //bom dia
        imagem.src = "manhas.png"
        document.body.style.background = "#e2cd9f"
    }
    else if (hora >= 12 && hora <= 18){
        //boa tarde
        imagem.src = "tardes.png"
        document.body.style.background = "#b9846f"
    }
    else{
        //boa noite
        imagem.src = "noites.png"
        document.body.style.background = "#515154"
    }
}
