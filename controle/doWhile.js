function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
 }

 let opcao = 0

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Número sorteado foi ${opcao}.`)
} while (opcao != -1)                                   

console.log('Até a próxima')

/* A diferença é que o while fica depois da estrutura dos blocos, e colocando o "do" no começo, 
 fazendo assim obrigatóriamente que a primeira opção seja executada mesmo sendo falsa. */