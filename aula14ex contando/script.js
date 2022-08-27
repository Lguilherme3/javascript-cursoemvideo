function contar() {
    let ini = document.getElementById('numinicial')
    let fim = document.getElementById('numFinal')
    let passo = document.getElementById('passo')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: <br>'

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            //contage crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }       
       } else {
        //contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}






/* for(numrec.value = 1; numrec.value <= 20; numrec.value++) {
    res.innerHTML = (`Número ${numrec.value}`)
}
*/