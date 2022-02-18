function Pessoa() {
    this.idade = 0                         //Criando atributo idade associado ao this

    const self = this                     //Criando constante self referenciando ao this
    setInterval(function() {              //Criando uma função com intervalo
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)               //A cada 1000 Milissegundo(1 segundo) ela será executada
}

new Pessoa                                //Instaciando a função pessoa pra que apareça em tela