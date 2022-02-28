import React from 'react'
import ReactDom from 'react-dom'

import Filho from './componentes/Filho'

// importando o componente BomDia
import BomDia from './componentes/BomDia'

//ReactDom.render(<BomDia nome="Gabriel" />, document.getElementById('root'))

// importando o componente Multiplos
import { BoaTarde, BoaNoite } from './componentes/Multiplos'

//ReactDom.render(
//    <div>
//        <BoaTarde nome="João" />
//        <BoaNoite nome="Lucas" />
//    </div>
//, document.getElementById('root'))

// importando o componente Saudacao
import Saudacao from './componentes/Saudacao'

//ReactDom.render(
//    <div>
//        <Saudacao tipo="Bom dia" nome="João" />
//    </div>
//, document.getElementById('root'))

// importando o componente Pai
import Pai from './componentes/Pai'

ReactDom.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva" >
            <Filho nome="João" />
            <Filho nome="Lucas" />
            <Filho nome="Maria" />
        </Pai>
    </div>
, document.getElementById('root'))