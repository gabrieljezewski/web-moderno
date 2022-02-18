const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala anônimo\n')                  // Saída de texto no console
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {                      // Saída do teclado, quando aperta o enter
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Fala ${nome}.\n`)
        process.exit()
    })
}

// Para utilizar o programa, executar via console: node entradaESaida.js -a e node entradaESaida.js