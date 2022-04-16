function contar() {
    var start = document.getElementById('txtsart')
    var end = document.getElementById('txtend')
    var step = document.getElementById('txtstep')
    var result = document.getElementById('result')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        window.alert('[ERRO] Insira todos os dados!')
    } else {
        result.innerHTML = 'Contando: '
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(step.value)
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                result.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            for(let c = i; c >= f; c -= p) {
                result.innerHTML += `${c} \u{1F449}`
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}