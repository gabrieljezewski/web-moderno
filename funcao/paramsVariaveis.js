function soma() {
    let soma = 0
    for (let i in arguments) {                  //Arguments é um array vazio interno de uma função
        soma += arguments[i]                    //recebe uma atribuição aditiva
    }
    return soma
 }

 console.log(soma())
 console.log(soma(1))
 console.log(soma(1.1, 2.5, 6.2))