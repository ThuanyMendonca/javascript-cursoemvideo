// Quando coloca n1 = 0, não tem problema passar apenas um parametro, o valor default fica 0
function soma(n1 = 0, n2 = 0){
    return n1 + n2
}

console.log(soma(2,5))