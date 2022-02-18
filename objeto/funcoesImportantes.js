const pessoa = {
    nome: 'Joao',
    idade: 2,
    peso: 14
}

console.log(Object.keys(pessoa))            //Mostra apenas as chaves do obj, e não os valores
console.log(Object.values(pessoa))          //Mostra apenas os valores do obj
console.log(Object.entries(pessoa))         //Mostra todos os valores dentro de um array externo


Object.entries(pessoa).forEach(([chave, valor]) => {            //Percorrendo os dados do obj por uma array
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {               //Definindo o atraibuto do obj data de nascimento, sem possibilidade ser alterado
    enumerable: true,
    writable: false,
    value: '01/01/1996'
})

console.log(pessoa.dataNascimento)

// Object.assign (ECMAScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)                         //Ele armazena todos os atributos de um obj para novo obj de destino

console.log(obj)