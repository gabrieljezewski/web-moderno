// Acessando o módulo do arquivo moduloA dentro da pasta /node
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

// Acessando o módulo saudacao a partir do index.js
const saudacao = require('saudacao')
console.log(saudacao.ola)

// Acessando o módulo core que já vem instalado no node
const http = require('http')
http.createServer((req, res) => {
    res.write('Olá')
    res.end()
}).listen(8080)