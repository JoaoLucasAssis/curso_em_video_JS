function carregar() {
    var mensagem = document.getElementById("msg")
    var imagem = document.getElementById("img")
    var data = new Date()
    var horas = data.getHours()
    mensagem.innerText = `Agora são ${horas} horas`

    if (horas >= 0 && horas < 12) {
        imagem.src = "imagens/dia.jpg"
        document.body.style.background = "#ffc400e1"
    } else if (horas >= 12 && horas <= 18) {
        imagem.src = "imagens/tarde.jpg"
        document.body.style.background = "#ff6600e1"
    } else {
        imagem.src = "imagens/noite.jpg"
        document.body.style.background = "#040218e1"
    }
}