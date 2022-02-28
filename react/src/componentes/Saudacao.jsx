import Reac, {Component} from 'react'

export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    setTipo(e){
        this.setState({ tipo: e.target.value})
    }

    setNome(e){
        this.setState({ nome: e.target.value})
    }

    // Primeiro criando uma função chamada render, com os elementos em tela
    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                <input type="text" placeholder="Tipo.." value={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome.." value={nome} onChange={e => this.setNome(e)} />
            </div>
        )
    }
}

// Importante, usando props, não pode ser alterado, é apenas leitura. Deste modo, é usado o state pois pode ser alterado