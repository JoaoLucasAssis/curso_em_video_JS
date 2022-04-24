//variáveis
var buttonStart
var buttonPause
var buttonReset
var divTempo
var tempo = 0
var timerId

//Inicia a aplicação
init()

function init(){
    buttonStart = document.getElementById("start")
    buttonStart.onclick = start //inicia função ao clicar

    buttonPause = document.getElementById("pause")
    buttonPause.onclick = pause //inicia função ao clicar
    buttonPause.disabled = true //botão pause desabilitado

    buttonReset = document.getElementById("reset")
    buttonReset.onclick = reset //inicia função ao clicar
    buttonReset.disabled = true //botão reset desabilitado

    divTempo = document.getElementById("tempo")
}


function update(){
    tempo = tempo + 0.100 //soma 1 segundo à variável tempo
    divTempo.innerHTML = tempo.toFixed(1) + "s" 
}

function start(){
    timerId = setInterval(update,100)
    buttonStart.disabled = true //start desabilita
    buttonPause.disabled = false //pause habilita
    buttonReset.disabled = false //reset habilita
}
function pause(){
    clearInterval(timerId)
    buttonStart.disabled = false //start desabilita
    buttonPause.disabled = true //pause habilita
}
function reset(){
    clearInterval(timerId)
    tempo = 0 //tempo volta para zero
    divTempo.innerHTML = tempo.toFixed(1) + "s"
    buttonStart.disabled = false //start desabilitado
    buttonPause.disabled = true //pause desabilita
}