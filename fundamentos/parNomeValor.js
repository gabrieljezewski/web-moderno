// par nome/valor
const saudacao = 'Opa'          //criei variável com contexto léxico 1

function exec() {               //criando função com mesmo nome da váriavel porém com contexto léxico 2
    const saudacao = 'Falaaa'
    return saudacao
}

const cliente = {               //objetos são grupos aninhados de pares nome/valor
    nome: 'João',
    idade: 32,
    peso: 75,
    endereco: {
        logradouro: 'Rua Av Ipiranga',
        numero: 232
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)