let nomeNave = prompt("Digite o nome da nave")
let dobra = 50
let dobraContador = 2
let confirmarDobra = true

while(confirmarDobra) {
    confirmarDobra = confirm(`Você deseja dobrar a velocidade da nave?`)
    if(confirmarDobra) {
        dobra += dobraContador
        console.log(`Dobrando em ${dobra} `)
    }else{
        break
    }

}

alert(`Você parou de dobrar ${(dobra -50) / 2}`)