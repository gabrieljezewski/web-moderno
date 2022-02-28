import React from 'react'

export default props =>
    <React.Fragment>
        <h1>Bom dia {props.nome}</h1>
        <h2>Até breve.</h2>
    </React.Fragment>

// props é um parâmetro da function, pode ser passado qualquer nome, mas normalmente é usado props

// 90% dos casos é usado div "<div> </div>" ao invés do React.Fragment, porém React.Fragment é usado mais para casos de que não deseja usar tags dentro de uma div
//<div>
//<h1>Bom dia {props.nome}</h1>
//<h2>Até breve.</h2>
//</div>