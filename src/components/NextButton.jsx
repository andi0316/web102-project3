import React from 'react';
import './NextButton.css';

const NextButton = ({onNext}) => {
  return (
    <button className='button' onClick={onNext}>
        Next
    </button>
  )
}

export default NextButton;