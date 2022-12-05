import React from "react"
import { Container } from "./styled"
import { useState } from "react"

export default function MainPage() {
    const [virarPergunta, setVirarPergunta] = useState(0)

    function virarCarta() {
        setVirarPergunta(virarPergunta + 1)
    }



    return (
        <Container>
            <Logo />
            { virarPergunta === 0 && <Perguntas virarCarta={virarCarta}
                QntPerguntas="1"
            />}
            { virarPergunta === 1 && <Perguntas virarCarta={virarCarta}
                QntPerguntas="2"
            />}
            { virarPergunta === 2 && <Perguntas virarCarta={virarCarta}
                QntPerguntas="3"
            />}
            { virarPergunta === 3 && <Perguntas virarCarta={virarCarta}
                QntPerguntas="4"
            />}

        </Container>
    )
}


function Logo() {
    return (
        <div className="logo">
            <img src="../../img/logo.png" />
            <h1>ZapRecall</h1>
        </div>
    )
}

function Perguntas(props) {
    let QntPerguntas = 0;
    return (
        <div className="perguntas">
            <div className="pergunta">
                <p>Pergunta {QntPerguntas}</p>
                <button onClick={props.virarCarta}>
                    <img src="../../img/seta_play.png" />
                </button>
            </div>
        </div>
    )
}


