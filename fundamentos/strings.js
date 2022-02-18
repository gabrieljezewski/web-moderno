const escola = "cod3r"

console.log(escola.charAt(4))   //Mostra a dígito do índice quatro da variável escola
console.log(escola.indexOf('d')) //Mostra qual é o número do índice dentro da variável
console.log(escola.substring(1))    //Motra a partir do índice 1 em diante
console.log(escola.substring(0,3)) //Mostra do índice 0 até o índice 3 mas não incluindo ele

console.log('Escola '.concat(escola).concat("!"))  //Mostrei em tela o dado "escola" e "!" sem armazenar na variavel
console.log(escola.replace(3, 'e'))                //Substitui o índice 3 para a letra "e"

console.log('Ana,Maria,Pedro'.split(','))  //Gerei uma Array com 3 elementos