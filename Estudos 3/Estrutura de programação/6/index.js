let podeDirigir = confirm(`Você tem +18 anos?`)
let cnh = confirm("Você tem CNH?") 

if(podeDirigir == false || cnh == false) {
    alert("Você não pode dirigir")
}else{
    alert("Você pode dirigir")
}