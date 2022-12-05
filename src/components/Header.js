import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.png'


export default function Header(){
    return(
        <Inicio>
            <img src = {logo} />
            <p>ZapRecall!</p>
        </Inicio>
    );
}

const Inicio = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    img {
        width: 52px;
    }
    p {
        margin-left: 25px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        color: #ffffff;
    }
`