const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }               //forma antiga de definir o nome dos objetos para os atributos, porém desse jeito pode ser alterado o nome não sendo igual as constantes.
const obj2 = { a, b, c }                        //método atual e atualizado de se utilizar
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.54

const obj4 = {[nomeAttr]: valorAttr}            //Criando dinamicamente um atribundo em um objeto usando string
console.log(obj4)

const obj5 = {                                  //definindo funções dentro de um objeto literal
    funcao1: function() {                       //Antiga versão
        //...
    },
    funcao2() {                                 //Versão nova

    }
}

console.log(obj5)