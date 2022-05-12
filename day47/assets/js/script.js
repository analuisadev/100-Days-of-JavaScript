function result() {
    let n1 = Number(window.prompt('Digite um número: '))
    let n2 = Number(window.prompt('Digite outro número: '))
    let exit = document.getElementById('exit')


    exit.innerHTML = ''

    if (n1 > n2) {
        exit.innerHTML += `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong>`
    } else if (n2 > n1) {
        exit.innerHTML += `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong>`
    } else if (n1 = n2 || n1 < n2 || n2 < n1) {
        exit.innerHTML += `Os valores inseridos são iguais ou menores, insira as informações novamente!`
    } 

}