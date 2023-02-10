class Carro {
    constructor(marca, cor, gasolina){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }
    
    dirigir(){
       for(let i = 1;i <= this.gasolina; i--){
        this.gasolina--
        if(this.gasolina == 0) {
            break
        }
           console.log(`DIRIGINDO ${this.gasolina}`)
       }
    }

    abastecer() {

        for(let i = 1;i >= this.gasolina; i++){
            this.gasolina++
            if(this.gasolina == 100) {
                break
            }
               console.log(`ABASTECENDO ${this.gasolina}`)
           }
    }

}

let  marcaCarro = "fiat"
let corCarro = "prata"
let gasolinaCarro = 100
const chamarCarro = new Carro(marcaCarro,corCarro, gasolinaCarro)


chamarCarro.dirigir()

chamarCarro.abastecer()











