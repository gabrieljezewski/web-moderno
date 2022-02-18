function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2       //Usando operador lógico OU
    const comprarTv50 = trabalho1 && trabalho2          //Usando operador lógico E
//  const comprarTv32 = !!(trabalho1 ^ trabalho2)       //Exemplo fazendo com operador lógio OU Exclusivo. (não recomendado)
    const comprarTv32 = trabalho1 != trabalho2          //Usando operador OU Exclusivo.
    const manterSaudavel = !comprarSorvete              //Negação lógica

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))