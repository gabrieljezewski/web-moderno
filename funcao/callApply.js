function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4542,
    desc: 0.15,
    getPreco
}

globalThis.preco = 20
globalThis.desc = 0.1
console.log(getPreco())                                     // Chamado a função diretamente
console.log(produto.getPreco())                             // Chamando por um objeto

const carro = { preco: 45455, desc: 0.20}

console.log(getPreco.call(carro))                           // Chamando por call passando um objeto
console.log(getPreco.apply(carro))                          // Chamando por apply passando um objeto

console.log(getPreco.call(carro, 0.15, 'R$'))               //Chamando a função por cal passando parâmetros
console.log(getPreco.apply(carro, [0.17, 'R$']))            //Chamando a função por apply passando parâmetros