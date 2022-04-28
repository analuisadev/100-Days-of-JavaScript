function test() {
    var number = Number(window.prompt('Digite um número'))
    let verify
    if (number % 2 == 0) {
        verify = '<strong>É PAR</strong>'
    } else {
        verify = '<strong>É ÍMPAR</strong>'
    }
    let res = document.querySelector('span#result')
    res.innerHTML = `<p>O número ${number} é ${verify}</p>`
}