function tabela() {
    let num = document.getElementById("num")
    var tab = document.getElementById("tabsel")

    if (num.value.length == 0) { 
        alert("[ERRO] Insira os dados, por favor.") //se o comprimento do valor de num for igual a zero
    } else { //se o comprimento do valor de num não for igual a zero
        var n = Number(num.value) // Number - tranforma de string para number
        var c = 1
        tab.innerHTML = '' //serve para limpar a tabuada
        while (c <= 10) {
            var item = document.createElement("option") //createElement - cria a tag option 
            item.text = `${n} x ${c} = ${n*c}` 
            item.value = `tab${c}`
            tab.appendChild(item) //appendChild - torna 'item' filha de 'tab'
            c++
        }
    }
}