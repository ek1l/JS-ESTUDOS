class Spaceship {
    constructor(nome, tripulantes){
        this.nome = nome
        this.tripulantes = tripulantes
        this.portas = false
        this.engatado = false
    }

    engatar(){
        this.engatado = true
        this.portas = true
    }
    
}

const doca = []    

function criarNave(nome,tripulantes){
const novaNave = new Spaceship(nome, tripulantes)
novaNave.engatar()
doca.push(novaNave)
console.table(novaNave) 
return doca.length -1
}

const realizarEngate = () => {
    const nomeNave = document.getElementById('nome').value
    const tripulantesNave = document.getElementById('tripulantes').value
    criarNave(nomeNave, Number(tripulantesNave))
    console.log(doca)
} 





