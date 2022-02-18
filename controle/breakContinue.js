const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break                               //joga pra fora do laço de repetição depois de ser igual a 5
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums){
    if (y == 5) {
        continue                              //interrompe o índice 5 e continua com a repetição do laço
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo       //criando um "rótulo" para o break pergar o for do rótuclo criado, e não do for mais perto dele.(Não recomendado mais usar)
        console.log(`Par = ${a}, ${b}`)
    }
}