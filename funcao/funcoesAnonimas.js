const soma = function (x, y) {                      //Criando função anonima sem nome, com dois parametros, x e y
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, function (x, y) {
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y)            //Criando com Arrow function, deste tipo sempre se trata como uma função anônima

//criando uma função anônima dentro de um objeto
const pessoa = {
    falar: function () {
        console.log('Opa')
    }
}

pessoa.falar()                                      //Acessando função anonima através de um atributo de um objeto