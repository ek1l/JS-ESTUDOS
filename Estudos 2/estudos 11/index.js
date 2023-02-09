let velocidadeNave = 150
let  alertaVelocidade = console.log(`A velocidade da nave está em ${velocidadeNave}Km/s`)


function desacelerar( callback ){
    for (let i = 0; i < velocidadeNave; i++) {
        if (i != 20) callback()
    }
}
function alterarVelocidade() {
    velocidadeNave = velocidadeNave - 20
    if(velocidadeNave == -10) {
        velocidadeNave = 0     
    }
    console.log(`A velocidade da nave está em ${velocidadeNave}Km/s`)
    
}

desacelerar(alterarVelocidade)
let chegamos = console.log(`Senhores passageiros chegamos ao destino`)

