// closure é o escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variáveis externas à função

// contexto léxico.

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()          //Declarei uma const referenciando a minha função que foi criada com a variável x dentro dela.
console.log(minhaFuncao())