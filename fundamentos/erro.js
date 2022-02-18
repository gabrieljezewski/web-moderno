function tratarErroELancar(erro){
    // throw new Error('Ocorreu algum erro')
    throw 'Ocorreu algum erro'
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!' )        //Convertendo as letras para maiúsculo adicionando pontos de exclamações
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'João' }
imprimirNomeGritado(obj)