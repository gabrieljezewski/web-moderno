const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa']
pilotos.pop()                       //remove o último elemento no array

pilotos.push('Verstappen')          //Adiciona um novo elemento na última posição
pilotos.shift()                     //Remove o primeiro elemento

pilotos.unshift('Hamilton')         //Adiciona um novo elemento na primeira posição

//Adicionando no índice 2 sem remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')

//Removendo do índice 3 apenas 1 elemento
pilotos.splice(3, 1)

//Novo array gerado a partir do índice 2
const algunsPilotos1 = pilotos.slice(2)

//Gerando novo array a partir do índice 1 até o 3
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)