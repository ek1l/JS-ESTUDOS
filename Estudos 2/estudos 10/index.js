let naveNome =  prompt(`Escolha o nome da nave:`)
if(naveNome.length == 0 ){
    naveNome =  "Nome não definido"
}

let velocidade = 10
function opcao(){
    let opcoes = prompt(`O nome da sua nave é "${naveNome}" agora escolha uma das opções abaixo:\n 1- Acelerar a nave em 5Km/s\n 2- Desacelerar em 5km/s\n 3- Imprimir dados de bordo\n 4- Sair`)
    switch(opcoes){

        case "1":
            velocity() 
            break
    
            case "2":
                desacelerar()
                break
    
                case "3":
                    imprimir()
                    break

                    case "4":
                        sair()
                        break
                        default:
                            opcao()
                           
    }
}
opcao()


function velocity() {

let confirmarVelocidade = confirm(`A sua velocidade agora é: ${velocidade}, deseja aumentar?`)

if(confirmarVelocidade) {

    for (let i = 0; i < velocidade; i++) {
          
            // let novaVelocidade = velocidade + 5
            confirmarVelocidade = confirm(`A sua velocidade agora é: ${velocidade}, deseja aumentar?`);
            if(confirmarVelocidade){
                velocidade = velocidade + 5
                console.log(velocidade)
            }else {
                opcao()
                break
            }
        }
    }
}



function desacelerar(){

    let confirmarVelocidade = confirm(`A sua velocidade agora é: ${velocidade}, deseja desacelerar?`)
    if(confirmarVelocidade) {

        for (let i = 0; i < velocidade; i++) {
              
                // let novaVelocidade = velocidade - 5
                
                confirmarVelocidade = confirm(`A sua velocidade agora é: ${velocidade}, deseja desacelerar?`);
                if(confirmarVelocidade){
                    // velocidade = novaVelocidade
                    velocidade = velocidade - 5
                    console.log(velocidade)
                }else {
                    opcao()
                    break
                }
            }
        }
}

 

function imprimir() {
let imprimir = confirm(`Nome da nave: ${naveNome}\n A sua velocidade atual é: ${velocidade} `)
if(imprimir == true) {
    opcao()
}else{
    opcao()
}
}


function sair() {
let saiu = confirm(`Deseja mesmo sair?`)
if(saiu){
    alert(`Você saiu do sistema, obrigado!`)
}else{
    opcao()
}
}