const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)                   // Criando objeto filho a partir do Object.create, ou seja, defini o obj filha1 como prototype do objeto pai
filha1.nome = 'Ana'                                 // Alterei o atributo nome do objeto pai
console.log(filha1.corCabelo)
console.log(filha1.nome)

const filha2 = Object.create(pai, {                 // Criando um objeto filha2, e a partir do Object.create defini o filha1 como prototype do objeto pai, e passando já os atributos de filha2
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)


// Descobrindo se o atributo veio pelo próprio objeto ou por herança
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}