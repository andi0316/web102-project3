import React from 'react';
import './NextButton.css';

export const NextButton = ({onNext, style}) => {
  return (
    <button className='button' onClick={onNext} style={style}>
        Next
    </button>
  )
}

export const BackButton = ({onPrev, style}) => {
  return (
    <button className='button' onClick={onPrev} style={style}>
        Prev
    </button>
  )
}

// export default NextButton;
