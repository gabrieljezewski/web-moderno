function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]              //Se min for maior que o max, será invertido o maximo pelo mínimo
    const valor = Math.random() * (max - min) +min
    return Math.floor(valor)            //arrendodar o valor pra baixo
}

console.log(rand([50, 40]))