// Estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1                          //variável 'a' recebe 'a' ou 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1())
console.log(soma1(2, 3, 2))
console.log(soma1(0, 0, 0))              //vai gerar valor 3 e somar, pois 0 é considerado como false.

// Estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1         //Se 'a' for diferente de undefined ou se for igual undefined ele pega o valor 1
    b = 1 in arguments ? b : 1          //Dentro de arguments existe o indice 1, se existir pegue o valor de b ou valor padrão
    c = isNaN(c) ? 1 : c                //Se a variavel c é isNaN, retorne o valor padrão e caso seja um numero retorne o valor de c. (Mais segura.)
    return a + b + c
}

console.log(soma2())
console.log(soma2(3))
console.log(soma2(2, 4, 5))
console.log(soma2(0, 0, 0))

// Usando valor padrão do es2015
function soma3(a = 1, b = 1, c = 3){
    return a + b + c
}

console.log(soma3())
console.log(soma3(3))
console.log(soma3(2, 4, 5))
console.log(soma3(0, 0, 0))