// Coleção dinâmica de pares/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 200

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 90000,
    proprietario: {
        nome: 'Raul',
        idade: 55,
        endereco: {
            logradouro:'Rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 20
    }, {
        nome: 'Ana',
        idade: 34
    }],
    calcularValorSeguro: function() {
        //....
    }
}

carro.proprietario.endereco.numero = 1000                               //alterando o valor do numero relacionado ao carro
carro['proprietario']['endereco']['logradouro'] = 'Av gigante'            //acessando valores no formato srintg de um objeto

delete carro.condutores         //deletenado o objeto condutores

console.log(carro)