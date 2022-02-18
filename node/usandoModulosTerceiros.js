//Utilizando o módulo lodash instalado pelo npm em node_modules
const _ = require('lodash')

//executando números aleatórios entre 50 a 60 a cada 2 segundos
setInterval(() => console.log(_.random(50, 60)), 2000)