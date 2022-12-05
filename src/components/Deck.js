import React from 'react'
import CardGame from './CardGame'

export default function Deck({cards, cont, setCont}){
    return(
        <>
            {cards.map((card, i) => (
                <CardGame data-test="flashcard"
                    key={i}
                    i={i}
                    card={card}
                    cont={cont}
                    setCont={setCont}
                >
                </CardGame>
            ))}
        </>
    );
}