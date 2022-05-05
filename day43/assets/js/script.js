function calculation() {
    let n1 = Number(prompt('Primeiro valor: '))
    let n2 = Number(prompt('Segundo valor: '))
    let result = Number(prompt(`Os números informados foram ${n1} e ${n2}, o que faremos com ele? \n[1]Somar\n[2]Sutrair\n[3]Multiplicar\n[4]Dividir`))

    let exit = document.getElementById('exit')
    exit.innerHTML = '<p>Calculando...</p>'
    switch (result) {
        case 1: 
            exit.innerHTML += `<p>${n1} + ${n2} = <strong>${n1+n2}</strong></p>`
            break
        case 2: 
            exit.innerHTML += `<p>${n1} - ${n2} = <strong>${n1-n2}</strong></p>`
            break
        case 3: 
            exit.innerHTML += `<p>${n1} x ${n2} = <strong>${n1*n2}</strong></p>`
            break
        case 4: 
            exit.innerHTML += `<p>${n1} / ${n2} = <strong>${n1%n2}</strong></p>`
            break
        default:
            exit.innerHTML += `<p>[ERRO!] Você digitou ${n1} e ${n2}, mas eu não sei o que fazer com eles...</p>`
            break
    } 
}