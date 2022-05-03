async function converter() {
    var quantia = document.getElementById("quantia").value
    var moedaIN = document.querySelector("input[name='in']:checked").value
    var moedaOUT = document.querySelector("input[name='out']:checked").value
    
    var url = 'https://api.exchangerate.host/convert?from='+moedaIN+'&to='+moedaOUT
    
    var response = await fetch(url)
    var dados = await response.json()
    
    document.getElementById("resultado").innerHTML = moedaOUT+(dados.info.rate * quantia).toFixed(2)
  }