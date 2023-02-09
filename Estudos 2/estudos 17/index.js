
class nave{
	constructor(name, tripulantes){
		this.name = name
		this.tripulantes = tripulantes
		this.ascentos = 20
		this.velocity = 0
	}
	
	speed(velocity2){
		 this.velocity = velocity2
	}
}

class naveBatalha extends nave{
    constructor(name, tripulantes, armas){
        super(name, tripulantes)
        this.armas = armas
         }
}

const naves = []


const criarNave = () => {
	let nomeNave = document.getElementById('nomenave').value
	let tripulantesNave =  document.getElementById('tripulantes').value
	let criarNaveTripulantes = new nave(nomeNave,tripulantesNave)
	if(tripulantesNave >= 20){
		alert(`Não temos ascentos o suficiente`)
		opcoesNave()
	}else {
		naves.push(criarNaveTripulantes)
		naves[0].speed(0)
		console.table(naves)
	}

}


const criarNaveBatalha = () => {
	let nomeNave = document.getElementById('nomenave').value
	let tripulantesNave =  document.getElementById('tripulantes').value
	let armasDaNave = document.getElementById('armas').value
	let criarNaveBatalha = new naveBatalha(nomeNave,tripulantesNave, armasDaNave)
	if(tripulantesNave >= 20){
		alert(`Não temos ascentos o suficiente`)
		opcoesNave()
	}else {
		naves.push(criarNaveBatalha)
		naves[0].speed(0)
		console.table(naves)
	}

}

const acelerar = () => {
	let qualVelocidade = document.getElementById('acelera').value
naves[0].speed(qualVelocidade)
naves.push(criarNaveBatalha)
alert(`A velocidade atual da nave é: ${qualVelocidade}`)
console.table(naves[0])
}

// function opcoesNave() {

// 	let opcoes = prompt(`Você deseja uma nave de batalha ou de transporte?\n 1 - Nave de transporte \n 2 - Nave de batalha`)
// 	switch(opcoes){
// 		case "1":
// 			criarNave()
// 			break
// 			case "2":
// 				criarNaveBatalha()
// 				break
// 	}
// }
// opcoesNave()
