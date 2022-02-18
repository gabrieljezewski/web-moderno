// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {           //Referencia dentro do browser globamente que aponta pra sua página Dom
    console.log('O evento ocorreu')
}