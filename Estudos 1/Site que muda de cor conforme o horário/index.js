var horaatual = new Date().getHours();
console.log(`O horário atual é ${horaatual}`)

if (horaatual >=12 && horaatual < 18 ) {
    document.body.style.background = 'yellow';
}else if(horaatual >18) {
    document.body.style.background = 'black';
}else {
    document.body.style.background = 'blue';
}



let novoElemento = document.createElement('h1')
novoElemento.className = "texto"
novoElemento.innerText = `O horário atual é: ${horaatual}h`

let elemento = document.querySelector('.texto')
elemento.appendChild(novoElemento)

if(horaatual >=12 && horaatual < 19) {
    novoElemento.innerText = `O horário atual é: ${horaatual}h, está de tarde.`
}else if(horaatual >18) {
    novoElemento.innerText = `O horário atual é: ${horaatual}h, está de noite.`
}else {
    novoElemento.innerText = `O horário atual é: ${horaatual}h, está de manhnã.`
}


