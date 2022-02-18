const aprovados = ['Joao', 'Maria', 'Pedro', 'Camila']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

//Percorrendo o array e mostrando apenas os nomes
aprovados.forEach(nome => console.log(nome))

//Armazenar uma função em uma variável e passar essa função por parâmetro foreach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)