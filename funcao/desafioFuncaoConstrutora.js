function Pessoa(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


function Fun1(x, y) {
    this.x = x
    this.y = y

    this.soma = function() {
        soma = x + y
        console.log(`Resultado da soma é ${soma}`)
    }
}

const resultado = new Fun1(3, 5)
resultado.soma()