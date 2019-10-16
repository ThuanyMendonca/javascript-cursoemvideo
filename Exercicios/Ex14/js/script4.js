let num = document.getElementById('txtNumero')
let tab = document.getElementById('seltab')
let subtitulo = document.getElementById('subtitulo')
// let res = document.getElementById('res')
// let i = 0;

function tabuada() {
    let n = Number(num.value);
    // if (n != "" ||n != 0) {
    //     subtitulo.innerHTML = `Tabuada do ${n}: <br>`
    //     for (i = 0; i <= 10; i++) {
    //         let mult = i * n;
    //         res.innerHTML += `${mult} <br>`;
    //     }
    // } else {
    //     alert(`Número inválido !`)
    // }
    c = 1
    tab.innerHTML = ''
    if (n != "" || n != 0) {
        subtitulo.innerHTML = `Tabuada do ${n}: <br>`
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } else {
        alert(`Número inválido !`)
    }

}
