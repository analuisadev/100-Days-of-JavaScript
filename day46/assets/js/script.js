function average() {
    
    let student = window.prompt('Qual é o nome do aluno(a)? ')
    let n1 = Number(window.prompt(`Qual é a primeira nota de ${student}?`))
    let n2 = Number(window.prompt(`Além de ${n1}, qual foi a outra nota de ${student}?`))
    let average = (n1 + n2)/2
    
    let msg
    exit.innerHTML = ''
    if (average >= 6) {
        msg = 'Meus Parabéns'
    } else {
        msg = 'Estude um pouco mais!'
    }
    let result = document.getElementById('exit')
    exit.innerHTML += `<p>Calculando a média final de ${student}</p>`
    exit.innerHTML += `<p>As notas obtidas foram: <mark>${n1}</mark> e <mark>${n2}</mark>.</p>`
    exit.innerHTML += `<p>A nota final será <mark>${average}</mark>.</p>`
    exit.innerHTML += `<p>A resposta que temos é: <span>${msg}<span></p>`
}