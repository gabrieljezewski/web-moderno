console.log(this === global)
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função, this aponta para module.exports/exports?')
    console.log(this === module.exports)
    console.log(this === exports)

    console.log(this === global)
}

logThis()