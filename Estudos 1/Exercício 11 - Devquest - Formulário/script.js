const nomePrimeiro = document.querySelector("#nome")
const emailSegundo = document.querySelector("#email")
const numeroTerceiro = document.querySelector("#numero")
const btn = document.querySelector("#enviar")
console.log(btn)


btn.addEventListener('click', function(bt) {
   bt.preventDefault();

   const nomeValue = nomePrimeiro.value
   const emailValue = emailSegundo.value
   const numeroValue = numeroTerceiro.value
   
   if(nomeValue === "" || emailValue === "" || numeroValue === "" ) {

    const pegarTodos = document.querySelectorAll(".errado")
    pegarTodos.forEach(pegar => pegar.classList.add('ativo'))


    const mudarBorda = document.querySelectorAll(".bordainput")
    mudarBorda.forEach(pegar => pegar.classList.add('ativo'))

     
    }else {
        const mudarBorda = document.querySelectorAll(".bordainput")
        mudarBorda.forEach(pegar => pegar.classList.add('passou'))
   }
})



function registrar() {
   let registro = document.querySelector(".popup")
   registro.style.display = "block"
}

function fechar(){
   let registro = document.querySelector(".popup")
   registro.style.display = "none"
}