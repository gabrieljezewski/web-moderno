// Mostrando que a variavel var pode ser definida fora dos blocos
{ { { { var sera = 'Será???' } } } }

console.log(sera)   // Pode estar fora dos blocos que é imprimido o valor

// Mostrando que quando define o var dentro de uma função, a mesma precisa estar dentro dos blocos
function teste(){
    var local = 123
    console.log(local)      // Não pode estar fora dos blocos
}

teste()