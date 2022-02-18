function Pessoa() {
    this.idade = 0

    setInterval(() =>{                      //Criando função arrow com intervalo
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa