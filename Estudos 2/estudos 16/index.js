class Carro {
    constructor(name, cor){
        this.name = name
        this.cor = cor
        this.velocidade = 0
        this.passageiro = true
    }

    mudarVelocidade(){
        this.velocidade = 100 
    }
}

const carros = []


function criarCarro(name,cor){
    let meuCarro = new Carro(name,cor)
    meuCarro.mudarVelocidade()
    carros.push(meuCarro)
    console.table(meuCarro)
}

const pergunta = () => {
    const nomes = document.getElementById('qualnome').value
    const cores = document.getElementById('qualcor').value
    criarCarro(nomes, cores)
}
