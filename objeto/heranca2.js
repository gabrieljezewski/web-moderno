// Cadeia de protótipos (prototype chain)
Object.prototype.atributo0 = 'Z'                            //Não recomendado adicionar um atributo ao prototype global
const avo = { atributo1: 'A' }                              //Avo tem como protótipo o Object.prototype
const pai = { __proto__: avo, atributo2: 'B' }              //Pai tem como protótipo o avo
const filho = { __proto__: pai, atributo3: 'C' }            //Filho tem como protótipo o pai

console.log(filho.atributo1)                  //objeto filho buscou o atributo1 na const avo
console.log(filho.atributo0)                  //como o objeto avo não aponta pra nenhum __proto__, ele aponta direto pro Objetct.prototype, sendo assim o filho buscou o atributo0 no Object.prototype
console.log(filho.atributo2)
console.log(filho.atributo3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324     // shadowing (sombreamento)
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())