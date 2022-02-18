const contadorA = require('./instanciaUnica')       // Exportando o módulo de instaciaUnica, mantendo cache.
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()      // Invocando a função factory, porém sem o cache devido ao método da função chamada.
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)