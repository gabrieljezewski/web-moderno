const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])  //Mostra em tela os valores dos índices 0 e 3 da variável valores

valores[4] = 10                     //Adicionei mais um índice do valor 10 na variável
console.log(valores)
console.log(valores.length)         //Mostra quantos índices tem na Array

valores.push({id: 3}, false, null, 'teste')      //Adiciona novos elementos dentro da array
console.log(valores)

console.log(valores.pop())      //Retira o último valor da Array
delete valores[0]               //Deleta o primeiro valor do índice 0 da Array
console.log(valores)

console.log(typeof valores)     //Array é um objeto