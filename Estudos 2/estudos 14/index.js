const nomeNave = prompt(`Digite o nome da nave:`)
console.log(nomeNave)
const tipoNave = prompt(`Digite o tipo da nave:`)
console.log(tipoNave)
const velocidademax = prompt(`Qual será a velocidade máxima da nave?`)
let velocidadeNave = 0

let nave = {

    nome: `${nomeNave}`,
    tipo: `${tipoNave}`,
    velocidade: function(velocidade){
        let acelerarNave = prompt(`Deseja acelerar a nave para quantos Km/s?`)
        let confirmarVelocidade =  confirm(`A velocidade da nave está em: ${velocidadeNave}, para aumentar para ${acelerarNave} pressione "OK"`)
       if(confirmarVelocidade === true) {
            while(velocidade <= acelerarNave){
                if(acelerarNave >= velocidademax) {
                    alert(`Não é possível acelerar a nave pois a velocidade máxima é ${velocidademax}`)
                    break
                }else {
                    console.log(`ACELERANDO A NAVE EM: ${velocidade} Km/s`)
                }
                console.log(velocidadeNave)
                velocidade++
                velocidadeNave = velocidade
            }
            
        }else{
            alert(`Você saiu do sistema, reinicie a página`)
        }          
    }
}
nave.velocidade(velocidadeNave)




// console.log(nave.nome)
// console.log(nave.tipo)
// console.log(nave.velocidade)



