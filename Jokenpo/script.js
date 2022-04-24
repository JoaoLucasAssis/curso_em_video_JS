//variaveis do placar
var scorePlayer = 0
var scoreIa = 0

function play(player) {
  var ia = Math.floor(Math.random()*3)+1 //varia 1-3
  var winner
  
  if ((ia == 1 && player == 3) || (ia == 2 && player == 1) || (ia == 3 && player == 2)) {
    winner = "IA VENCEU"
    scoreIa++
  } else if ((ia == 1 && player == 2) || (ia == 2 && player == 3) || (ia == 3 && player == 1)) {
    winner = "JOGADOR VENCEU"
    scorePlayer++
  } else {
    winner ='EMPATE'
  }
  var w = document.getElementById('winner')
  w.innerHTML = winner
  var s = document.getElementById('score')
  s.innerHTML = 'jogador'+' '+scorePlayer+"X"+scoreIa+' '+'IA'
}