function reverseString() {
   let nome = prompt(`Digite o nome da nave:`)
   console.log(nome)
   let semE = nome.replaceAll("e", "")
   let naveNome = ""
    for (let i = nome.length - 1; i >= 0; i--) {
        naveNome += nome[i]

    }
    let semENave = naveNome.replaceAll("e", "")
    
    alert(`O nome original da nave é: ${semE}\n O nome da nave invertido é: ${semENave}`)


}

reverseString()

