let valores = [8,1,7,4,2,9]

// for(i=0; i < valores.length;i++){
//     console.log(`A posição ${i} tem o valor ${valores[i]}`)
// }
valores.sort()

console.log(valores.indexOf(7))

/* 
    Quando não existe o valor pesquisado no indexOf, 
    ele retorna -1 que significa que não existe
*/

// Para cada posição em valores, mostra o valores[i]
for(let i in valores){
    console.log(`A posição ${i} tem valor ${valores[i]}`)
}

