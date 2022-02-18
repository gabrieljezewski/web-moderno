const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'        //Mostra a variável nome recebendo os dados "Olá" e "!" sem armazenar
const template = `                              
    Olá
    ${nome}!`                                   //Mostra a varável recebendo os dados com quebra de texto
console.log(concatenacao, template)

//Expressoes..
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()   //Transforma variavel texto em maiúsculo usando função up
console.log(`Ei... ${up('cuidado')}!`)