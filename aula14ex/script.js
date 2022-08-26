var numero1 = document.getElementById('numinicial')
var res = document.getElementById('res')

function verificar() {
    for(numero1.value = 1; numero1.value <= 5; numero1.value++) {
        res.innerHTML = (`Número ${numero1}`)
    }
}

