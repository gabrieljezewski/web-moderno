aprovados = ['Joao', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])

// Adicionando um novo elemento no Array
aprovados[3] = 'Paulo'
// Método mais utilizado para adicionar
aprovados.push('Abia')
// mostrando o tamanho do Array
console.log(aprovados.length)
// ordenando os elementos dentro do array
aprovados.sort()
console.log(aprovados)

// deletando aquele atributo dentro do array
delete aprovados[1]
console.log(aprovados)

aprovados[1] = 'teste'
// Removendo o atributo do índice 1 pelo splice
aprovados.splice(1, 1)
console.log(aprovados)