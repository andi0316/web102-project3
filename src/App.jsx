
import './App.css'
import { useState } from 'react';
import Card from './components/BaseCard';
import NextButton from './components/NextButton';
import cardinfo from './card-info';

const App = () => {
  const [count, setCount] = useState(0)
  const [flipped, setFlip] = useState(false);

  const currCard = cardinfo[count];

  const flipState = () => {
    setFlip(!flipped);
  }

  const newCard = () => {
    if (cardinfo.length <= 1) return;

    let randIndex = Math.floor(Math.random() * (cardinfo.length))
    while (randIndex == count) {
      randIndex =  Math.floor(Math.random() * (cardinfo.length))
    }

    setCount(randIndex);
    setFlip(false);
  }
  

  return (
    <div className='App'>
      <div className= 'header'>
        <div className='header2'>
          <h1>Who's That Pokemon?</h1>
        </div>
        <h2>These flashcards will test your ultimate Pokemon knowledge! Can you guess them by description?</h2>
        <h3>Green means Easy, Yellow means Medium, and Red means Hard!</h3>
        <h2> Number of cards: {cardinfo.length} </h2>
      </div>

      <Card 
        card = {currCard}
        flipped = {flipped}
        onFlip={flipState}
      />

      <NextButton onNext={newCard}/>

    </div>
  )
}

export default App;
