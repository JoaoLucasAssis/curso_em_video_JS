function calcular() {
    var txtv = document.getElementById("txtVel") //seleciona a variável e salva no JS
    var v = Number(txtv.value) //transforma a variável em tipo número

    if (v > 80) { //se variável v for maior que 80
        alert("Lamento, você foi multado.")

    } else { //se variável v não foi maior que 80
        alert("Você não foi multado.")
    }
} 
