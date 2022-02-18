const peso1 = 1.0
const peso2 = Number('2.0') //Função que declara a variável e pode fazer alguns testes.

console.log(peso1, peso2)               
console.log(Number.isInteger(peso1))    //declara se a variável é false ou true de número inteiro.

const avaliacao1 = 9.435
const avaliacao2 = 3.423
const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))  //toFixed mostra o resultado de casas decimais
console.log(media.toString(2))  //toString o resultado em binário.