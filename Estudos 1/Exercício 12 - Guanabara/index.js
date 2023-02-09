function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var resultado = document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert(`[ERRO] Faltam dados`)
    }else{
        resultado.innerHTML = `Contando: `
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        for(let c = i; c <= f; c += p) {
            resultado.innerHTML += `👉${c}`
        }
        console.log(resultado)
    }


}