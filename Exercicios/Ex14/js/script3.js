let inicio = document.getElementById('txtInicio')
let fim = document.getElementById('txtFim')
let passo = document.getElementById('txtPasso')
let res = document.getElementById('res')

function contar() {
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    res.innerHTML = 'Contando <br>'

    if(p <= 0){
        alert('Considerando passo = 1')
        p = 1
    }

    if (i < f) {
        // Contagem crescente
        for (i; i <= f; i += p) {
            //console.log(i)       
            res.innerHTML += ` ${i} \u{1F449}`
        }
    } else {
        // Contagem decrescente
        for (i; i >= f; i -= p) {
            //console.log(i)       
            res.innerHTML += ` ${i} \u{1F449}`
        } 
    }
    res.innerHTML += `\u{1F3C1}`
}