import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

const tag = <strong>Olá Mundo</strong>

ReactDOM.render( 
    <div>
        <Primeiro></Primeiro>
        <ComParametro
            titulo = "Nota review de jogos "
            nome = "Left 4 Dead"
            nota = {9}
        />
        <ComParametro
            nome = "Diablo 4"
            nota = {10}
        />
        <ComParametro
            nome = "CS"
            nota = {7}
        />
    </div>,
    document.querySelector("#root")
)