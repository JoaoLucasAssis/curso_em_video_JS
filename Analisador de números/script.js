let num = document.getElementById("txtn")
let lista = document.getElementById("tabsel")
let res = document.getElementById("res")
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert("[ERRO] Valor inválido ou já inserido.")
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert("[ERRO] Insira algum valor antes de finalizar.")
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números inseridos.</p>`
        res.innerHTML += `<p>O menor número inserido foi ${menor}.</p>`
        res.innerHTML += `<p>O maior número inserido foi ${maior}.</p>`
        res.innerHTML += `<p>Somando todos os números, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos números é ${media.toFixed(2)}</p>`
    }
}