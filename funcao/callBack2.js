const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])                      //Push pra adicionar um elemento na array
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter( function (nota) {           //Função que filtra elementos de uma array dependendo se for true or false
    return nota < 7
})

console.log(notasBaixas2)

// Função Arrow com callback
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)