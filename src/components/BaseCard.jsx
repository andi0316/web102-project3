import React from 'react';
import './BaseCard.css';

const Card = ({card, flipped, onFlip}) =>{
    const { question, answer, level} = card;
    
    const levelColor = {
        easy : '#c9ffbd',
        medium: '#fffdbd',
        hard: '#fcac9a'
    }

    const background = levelColor[level];

    return(
        <div className='card' onClick={onFlip} style = {{background}}>
            <div className='info'>
                {flipped ? answer : question}
            </div>
        </div>
    )
}

export default Card;