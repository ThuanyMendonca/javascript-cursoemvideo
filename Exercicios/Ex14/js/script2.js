var ano = document.getElementById('txtano')
var sexo = document.getElementsByName('radsex')
var res = document.querySelector('div#res')

function calculaIdade(ano){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var idade = anoAtual - Number(ano.value)
    return idade;
}

function verificar(){
    var minhaIdade = calculaIdade(ano);
    var genero = ''
    if(sexo[0].checked){
        genero = 'Homem'
    } else {
        genero = 'Mulher'
    }
    res.innerHTML = `Você é ${genero} e sua idade é: ${minhaIdade}`
}
