function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert("[ERRO] Verique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement("img")
        img.setAttribute("id","foto")
        if (fsex[0].checked) {
            genero = 'Homem'
                if (idade >= 0 && idade < 12) {
                    img.setAttribute("src", "imagens/crianca_mas.jpg")
                } else if (idade < 18) {
                    img.setAttribute("src", "imagens/jovem_mas.webp")
                } else if (idade < 60) {
                    img.setAttribute("src", "imagens/adulto_mas.webp")
                } else {
                    img.setAttribute("src", "imagens/idoso_mas.webp")
                }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                img.setAttribute("src", "imagens/crianca_fem.jpg")
            } else if (idade < 18) {
                img.setAttribute("src", "imagens/jovem_fem.webp")
            } else if (idade < 60) {
                img.setAttribute("src", "imagens/adulto_fem.webp")
            } else {
                img.setAttribute("src", "imagens/idoso_fem.webp")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img).style.textAlign = 'center'
    }
}