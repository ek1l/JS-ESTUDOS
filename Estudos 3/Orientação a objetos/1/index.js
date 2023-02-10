class Banco {
    constructor(saldo){
        this.saldo = saldo
    }

    deposito(valor){
       this.saldo += valor
    }
    
    saque(valor){
        this.saldo -= valor
    }
}
const classe = new Banco(2000)

classe.deposito(1000)

console.log(classe.saldo)

classe.saque(1000)

console.log(classe.saldo)