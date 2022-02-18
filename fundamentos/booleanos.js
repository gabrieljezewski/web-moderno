let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log(!true) //Não é verdadeiro, = false.
console.log(!false) //Não é falso, = true.
console.log(!!true) //É verdadeiro
console.log(!!false) //É falso


console.log('Condições que resolve pra true')
console.log(!!3)        //Número positivo
console.log(!!-1)       //Número negativo
console.log(!!' ')      //Espaço em branco
console.log(!!'texto')  //Texto
console.log(!![])       //Array
console.log(!!{})       //Objeto
console.log(!!Infinity) 
console.log(!!(isAtivo = true))


console.log('Condições que resolve pra false')
console.log(!!0)
console.log(!!'')       //String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Exemplos..')
var nome = 'Lucas'
console.log(nome || 'Desconhecido')

var nome = ''
console.log(nome || 'Desconhecido')