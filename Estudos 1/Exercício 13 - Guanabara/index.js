let divresult = document.createElement('h1')
const anoNascimento = document.getElementById('#ano').value;


function resultado(){

const anoNascimento = document.getElementById('#ano').value;
const anoAtual = new Date().getFullYear();
const result = anoAtual - anoNascimento



divresult.className = "idade"
divresult.innerHTML = `A sua idade é: ${result} anos.`

let suaIdade = document.querySelector('.idade')
suaIdade.appendChild(divresult)

if (anoAtual <= result ){
    divresult.innerHTML = `Digite o seu ano de nascimento.`
}else if(result <= 0){
    divresult.innerHTML = `Digite um ano válido.`
}else if(anoNascimento >= anoAtual){
    divresult.innerHTML = `Digite um ano válido.`
}else if(anoNascimento.length != 4) {
    divresult.innerHTML = `Digite um ano válido.`
}

}



var div = document.createElement("img")


function Mbutton(){
    div.src = ("homem.png")
    div.className = "foto"
    let FotoM = document.querySelector('.foto')
    FotoM.appendChild(div)
    
   
   
   }



   
var div = document.createElement("img")


function Fbutton(){
    div.src = ("mulher.png")
    div.className = "foto"
    let FotoM = document.querySelector('.foto')
    FotoM.appendChild(div)
    
   
   
   }

   


