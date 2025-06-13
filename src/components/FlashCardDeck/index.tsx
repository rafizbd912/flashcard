import React, { useState } from 'react';
import { FlashCardDeckProps } from '../../types/FlashCard';
import FlashCard from '../FlashCard';
import './index.css';

const FlashCardDeck: React.FC<FlashCardDeckProps> = ({ flashCards }) => {
  const [cards, setCards] = useState(flashCards);

  const handleShuffle = () => {
    setCards(prev => {
      if (prev.length <= 1) return prev;
      return [...prev.slice(1), prev[0]];
    });
  };

  return (
    <div data-testid="flashcard-deck">
      {cards.map(card => (
        <FlashCard key={card.id} flashCard={card} />
      ))}

      <button
        data-testid="shuffle-button"
        onClick={handleShuffle}
        style={{ marginTop: '1rem' }}
      >
        Shuffle
      </button>
    </div>
  );
};

export default FlashCardDeck;