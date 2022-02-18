let dobro = function (a) {
    return 2 * dobro
}

dobro = (a) => {            
    return 2 * a
}

dobro = a => 2 * a                  //Mesmo ex acima, porém usando função Arrow
console.log(dobro(Math.PI))

let Ola = function () {
    return 'Olá'
}

ola = () => 'Olá'                   //Refatorando pelo ex acima com Arrow
console.log(ola())