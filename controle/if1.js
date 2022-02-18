function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)

function seForVerdade(valor) {
    if(valor) {
        console.log('É verdade ' + valor)
    }
}

seForVerdade('testando se é verdade')
seForVerdade('aaa')
seForVerdade(2)
seForVerdade([1, 2])