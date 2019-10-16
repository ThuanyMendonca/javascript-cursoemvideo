let num = [5,2,8,9,3]
num[5] = 1

// Acrescentando valor no array
num.push(7) // Adiciona o valor na ultima posição
console.log(num.length)

// Colocar em ordem crescente
num.sort()
console.log(num)

for(i=0; i < num.length; i++){
    console.log(num[i])
}