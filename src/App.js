import React from 'react';
import './App.css';
import 'h8k-components';
import FlashCardDeck from './components/FlashCardDeck';
import { flashCardsData } from './data/cards-data';

const title = "FlashCards";

function App() {
  return (
    <div className="App">
      <h8k-navbar header={title} data-testId="navbar"></h8k-navbar>
      <FlashCardDeck flashCards={flashCardsData} />
    </div>
  );
}

export default App;
