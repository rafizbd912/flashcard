import React, { useState } from 'react';
import { FlashCardProps } from '../../types/FlashCard';
import './index.css';


const FlashCard: React.FC<FlashCardProps> = ({ flashCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flashcard"
      data-testid={`flashcard-container-${flashCard.id}`}
      onClick={() => setIsFlipped(f => !f)}
      style={{ cursor: 'pointer' }}
    >
      {/* the CSS in index.css will use “.flipped” to swap front/back */}
      <div className={`flashcard-content${isFlipped ? ' flipped' : ''}`}>
        {/* always render both sides */}
        <div
          className="front"
          data-testid={`flashcard-question-${flashCard.id}`}
        >
          {flashCard.question}
        </div>
        <div
          className="back"
          data-testid={`flashcard-answer-${flashCard.id}`}
        >
        {flashCard.answer}
        </div>
      </div>
    </div>
  );
};


export default FlashCard;