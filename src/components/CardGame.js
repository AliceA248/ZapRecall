import React from 'react'
import { useState } from 'react'
import LogoSetaPlay from '../img/seta_play.png'
import LogoSetaVirar from '../img/seta_virar.png'
import IconeCerto from '../img/icone_certo.png'
import IconeQuase from '../img/icone_quase.png'
import IconeErro from '../img/icone_erro.png'
import styled from 'styled-components'

export default function CardGame({i, card, cont, setCont}){

    const [estadoCarta, setEstadoCarta] = React.useState('PerguntaFechada');
    const [icon, setIcon] = React.useState('');
    const [cor, setCor] = React.useState('');

    switch(estadoCarta){
        case 'PerguntaFechada':
            return(
                <PerguntaFechada>
                    <p>Pergunta {i + 1} </p>
                    <img src={LogoSetaPlay}  onClick={() => setEstadoCarta('PerguntaAberta')}/>
                </PerguntaFechada>
            );
            break;
        
        case 'PerguntaAberta':
            return(
                <PerguntaAberta>
                    <p>{card.question}</p>
                    <img src={LogoSetaVirar}  onClick={() => setEstadoCarta('PerguntaFinal')}/>
                </PerguntaAberta>);
            break;

        case 'PerguntaFinal':
            return(
                <PerguntaAberta>
                    <p>{card.answer}</p>
                    <div>
                        <Button cor = '#FF3030' onClick={() => (setEstadoCarta('CartaFinalizada'), setIcon(IconeErro), setCor('#FF3030'), setCont(cont + 1))}> Não lembrei </Button>
                        <Button cor = '#FF922E' onClick={() => (setEstadoCarta('CartaFinalizada'), setIcon(IconeQuase), setCor('#FF922E'), setCont(cont + 1))}> Quase não lembrei </Button>
                        <Button cor = '#2FBE34' onClick={() => (setEstadoCarta('CartaFinalizada'), setIcon(IconeCerto), setCor('#2FBE34'), setCont(cont + 1))}> Zap!! </Button>
                    </div>
                </PerguntaAberta>
            );
            break;

        case 'CartaFinalizada':
            return(
                <CartaFinalizada cor = {cor}>
                    <p>Pergunta {i + 1} </p>
                    <img src={icon} alt="IconAnswer" />
                </CartaFinalizada>
            );
            break;
    }
}


const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    img {
        cursor: pointer;
    };
`
const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img{
        position: absolute;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
      }
    div{
        display: flex;
    };
`

const CartaFinalizada = styled.div`   
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => props.cor};
        text-decoration:line-through;
    }
`;

const Button = styled.button`
    width: 100px;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    background-color: ${(props) => props.cor};
    border-radius: 5px;
    border: none;
    margin: 0px 8px;
    padding: 5px;
    cursor: pointer;
`;