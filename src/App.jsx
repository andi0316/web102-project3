
import './App.css'
import { useState } from 'react';
import Card from './components/BaseCard';
import {NextButton, BackButton} from './components/NextButton';
import cardinfo from './card-info';

const App = () => {
  const [count, setCount] = useState(0)
  const [flipped, setFlip] = useState(false);
  const [guess, setGuess] = useState("");
  const [outcome, setOutcome] = useState("");

  const currCard = cardinfo[count];

  const flipState = () => {
    setFlip(!flipped);
  }

  const newCard = () => {
    if (cardinfo.length <= 1) return;

    if (count < cardinfo.length - 1){
      setCount(count + 1);
    }
    // let randIndex = Math.floor(Math.random() * (cardinfo.length)) 
    // while (randIndex == count) {
    //   randIndex =  Math.floor(Math.random() * (cardinfo.length))
    // }

    // setCount(randIndex);
    setFlip(false);
    setGuess("");
    setOutcome("");
  }

  const prevCard = () => {
    if (cardinfo.length <= 1) return;

    if (0 < count){
      setCount(count - 1);
    }

    setFlip(false);
    setGuess("");
    setOutcome("");
  }

  const handleSubmit = () => {
    if (guess.trim().toLowerCase() == currCard.answer.toLowerCase()){
      setOutcome("Correct!");
    }
    else{
      console.log(guess);
      console.log(currCard.answer);
      setOutcome("Incorrect.");
    }
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

      <div className="guess-area">
        <h1> Guess: </h1>

        <input 
          className='input-box' 
          disabled={flipped} 
          value={guess}
          onChange={(e) => (setGuess(e.target.value))}>  
        </input>
      
        <button 
          className='input-button'
          onClick={handleSubmit}
          disabled={flipped}>
          Submit 
        </button>

        <h1>{outcome}</h1>
      </div>

 
      <BackButton onPrev={prevCard} style={{backgroundColor: count == 0 ? "#ccc" : "white"}}/>
      <NextButton onNext={newCard} style={{backgroundColor: count == cardinfo.length - 1 ? "#ccc" : "white"}}/>

    </div>
  )
}

export default App;
