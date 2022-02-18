// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana}

Object.freeze(pessoa)                                               //Congelando o objeto pra não ser editado.

pessoa.nome = 'Maria'
pessoa.end = 'Rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao'})              //Criando objeto congelado com o nome definido, e não podedndo ser alterado.