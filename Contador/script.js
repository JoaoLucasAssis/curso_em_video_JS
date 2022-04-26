function calcular() {

    var inicio = Number(document.querySelector("input#inicio").value)
    var fim = Number(document.querySelector("input#fim").value)
    var passos = Number(document.querySelector("input#passos").value)
    var res = document.getElementById("res")

    if (inicio == 0 || fim == 0 || passos == 0) {
        res.innerHTML = 'Impossível contar!'
        alert("[ERRO] Preencha os campos necessários.")
    } else {
        res.innerHTML = 'Contando: '

        if (passos <= 0) {
            res.innerHTML = 'Impossível contar!'
        alert("[ERRO] Preencha os campos necessários.")
        }

        if ( inicio < fim) {
            for (let c = inicio; c <= fim; c += passos) {
                res.innerHTML += `${c} `
            }
        } else {
            for (let c = inicio; c >= fim; c -= passos) {
                res.innerHTML += `${c} `
            }
        }
    }
}