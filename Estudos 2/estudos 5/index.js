let nomePiloto = prompt(`Qual é o seu nome?`)
let velocidade = 0
let velocidadeNava = alert(`Olá ${nomePiloto}! A velocidade da nave está em ${velocidade}km`)
let alterarVelocidade = prompt(`Em qual velocidade você gostaria de acelerar a nave?`)
let confirmarVelocidade = confirm(`Você deseja acelerar a nave em ${alterarVelocidade}Km?`)

if(confirmarVelocidade == false){
    alert(`${nomePiloto} Precisamos da sua confirmação para acelerar a nave em ${alterarVelocidade}km`)
}else {
    alert(`${nomePiloto} A velocidade da nava foi acelerada em: ${alterarVelocidade}km`)
}

