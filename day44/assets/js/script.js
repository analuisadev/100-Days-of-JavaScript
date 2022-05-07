function counter() {
    let exit = document.getElementById('exit')
    exit.innerHTML = '<p>Iniciando a contagem...</p>'

    let count = 1

    while (count <= 10) {
        exit.innerHTML += `${count}&#x1F449;`
        count ++
    }

    exit.innerHTML += ` &#x1F3C1;`
}