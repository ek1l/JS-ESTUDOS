class Endereco {
    constructor(rua, bairro, cidade, estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
}

const alterarPropriedades = () => {
    let qualRua = prompt(`Qual é a sua rua?`)
    let qualBairro = prompt(`Qual é o seu bairro?`)
    let qualCidade = prompt(`Qual é a sua cidade?`)
    let qualEstado =  prompt(`Qual é o seu estado?`)
    let endereco = new Endereco(qualRua, qualBairro, qualCidade, qualEstado)
    console.log(endereco)
}




alterarPropriedades()
