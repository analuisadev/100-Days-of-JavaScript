function analysis() {
    let month = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Augu', 'Sept', 'Oct', 'Nov', 'Dec')
    let week = new Array('Sund', 'Mond', 'Tues', 'Wedn', 'Thurs', 'Frid', 'Sat')
    let now = new Date
    let leave = document.getElementById('leave')
    let day = now.getDate()
    let thisMonth = now.getMonth()
    let year = now.getFullYear()
    let thisWeek = now.getDay()
    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()

    leave.innerHTML = `<p>Dia: <mark>${day}</mark></p>`
    leave.innerHTML += `<p>Mês: <mark>${month[thisMonth]}</mark></p>`
    leave.innerHTML += `<p>Ano: <mark>${year}</mark></p>`
    leave.innerHTML += `<p>Dia da Semana: <mark>${thisWeek}</mark</p>`
    leave.innerHTML += `<p>Hora: <mark>${hour}</mark></p>`
    leave.innerHTML += `<p>Minuto: <mark>${minute}</mark></p>`
    leave.innerHTML += `<p>Segundo: <mark>${seconds}</mark></p>`
}