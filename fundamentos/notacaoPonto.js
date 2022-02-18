console.log(Math.ceil(6.1))     //arredonda o número pra cima

const obj1 = {}
obj1.nome = 'bola'      //criando atributo dentro de um objeto
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome            //criando uma função publica atribuindo ao 'nome'
}

const obj2 = new Obj('Cadeira') //Mostrando que é possível acessar o Obj de um atributo utilizando o this
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)