import React from 'react'
import Header from './Header'
import Deck from './Deck'
import Footer from './Footer'
import styled from 'styled-components'


const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },

];

export default function Main() {

  const[cont, setCont] = React.useState(0);
  
  return (
        <MainPage>
          <Header />
          <Deck cards={cards} cont={cont} setCont={setCont}/>
          <Footer deck={cards.length} cont={cont}/>
        </MainPage>
  );
}

const MainPage = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`