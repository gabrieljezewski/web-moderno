const pessoa = {
    saudacao: 'Bom dia',
        falar() {                               //criando uma função dentro de um objeto
        console.log(this.saudacao)             //acessando o atributo saudacao do objeto pessoa pela função falar.
    }
}

pessoa.falar()

const falarDePessoa = pessoa.falar.bind(pessoa)      //Criando variável falarDePessoa, chamei o objeto pessoa com a função falar, passando pessoa como argumento pra funcao bind
falarDePessoa() 