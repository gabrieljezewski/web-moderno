let contador = 1
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {            //percorrendo entre as casas da array dentro do tamanho deste array, usando o length
    console.log(`nota = ${notas[i]}`)
}