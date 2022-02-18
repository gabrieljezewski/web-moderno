/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false */

function verificaInteiro (x) {
    if (x%3 == 0) {
        return true
    } else {
        return false
    }
}

console.log(verificaInteiro(6))
console.log(verificaInteiro(8))