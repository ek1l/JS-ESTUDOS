let  carros = ["Camaro","Chevette","Civic","Corolla","Passat","Azera"]
let pessoas = ["Guilherme","Jessica","Katarina","joão","Hugo","Aline","Gustavo"]

function numeroElementos() {
    console.log(carros.length,pessoas.length)
    if(carros.length < 5 || pessoas.length < 5) {
        console.log("Você tem -5 elementos")
    }else{
        console.log("Você tem muitos elementos")
    }
}


numeroElementos()