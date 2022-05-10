let result = document.querySelector('section#exit')
let player = 0
let computer = 0 

function guess() {
    let min = 1
    let max = 100 
    let difference = max - min 
    let n = Math.random()
    computer = min + Math.trunc(difference * n)
}

function game() {
    player = Number(window.prompt('Qual é o seu palpite? '))
    exit.innerHTML = ''
    if (player < computer) {
        exit.innerHTML += `<p>Você escolheu o número ${player}, o meu é <strong>MAIOR</strong></p>`
    } else if (player > computer){
        exit.innerHTML += `<p>Você escolheu o número ${player}, o meu é <strong>MENOR</strong></p>`
    } else if(player == computer) {
        exit.innerHTML += `<p>PARABÉNS, você acertou!</p>`
    }

}