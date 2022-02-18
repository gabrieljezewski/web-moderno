const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {                     //arredonda a nota pra baixo.
        case 10:                                    //nessa condição, significa que se for a nota 10 ou 9, executa o console.log
        case 9:
            console.log('Quadro de honra')
            break                                   //significa que se a nota for conforme acima, 10 ou 9, ele executa e fecha o switch sem executar as de baixo.
        case 8:
        case 7:
            console.log('Aprovado')
            break
        case 6:
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
        default:                                    //se não for nenhuma das alternativas acima
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(7.7)
imprimirResultado(4.3)
imprimirResultado(2)
imprimirResultado('aaa')