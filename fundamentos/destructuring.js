const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua abc',
        numero: 1000
    }
}

const { nome, idade } = pessoa      //extraindo da variavel pessoa apenas o nome e a idade
console.log(nome, idade)

const { endereco: { logradouro, numero } } = pessoa
console.log(logradouro, numero)     //extraindo de endereco apenas o logradouro e numero