let nomeNave = prompt(`Digite o nome da espaçonave:`)
let substituirNome = prompt(`Qual caractere você deseja substituir`)
let alterarNome = prompt(`Por qual caractere você deseja substituir?`)
let novoNome = ""


for (let i = 0;i < nomeNave.length; i++) {
   
    if(substituirNome === nomeNave[i] ) {
        novoNome += alterarNome
    }else {
        novoNome += nomeNave[i]
    }

}

alert(`O novo nome da sua nave é: ${novoNome}.`)




