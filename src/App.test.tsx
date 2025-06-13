import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import App from './App';
import { flashCardsData } from './data/cards-data';

test('renders correct number of flashcards questions', () => {
  const { getAllByTestId } = render(<App />);
  const flashcards = getAllByTestId(/flashcard-question-/);
  expect(flashcards.length).toEqual(flashCardsData.length);
});

test('renders flashcard questions and answers', () => {
  const { getByTestId } = render(<App />);
  flashCardsData.forEach((card) => {
    const flashcardQuestion = getByTestId(`flashcard-question-${card.id}`);
    expect(flashcardQuestion).toHaveTextContent(card.question);
  });
});

test('flips flashcard on click', () => {
  const { getByTestId } = render(<App />);
  flashCardsData.forEach((card) => {
    const flashcard = getByTestId(`flashcard-container-${card.id}`);
    const flashcardAnswer = getByTestId(`flashcard-answer-${card.id}`);
    fireEvent.click(flashcard);
    expect(flashcardAnswer).toHaveTextContent(card.answer);
  });
});

test('flips flashcard back on second click', () => {
  const { getByTestId } = render(<App />);
  flashCardsData.forEach((card) => {
    const flashcard = getByTestId(`flashcard-container-${card.id}`);
    const flashcardQuestion = getByTestId(`flashcard-question-${card.id}`);
    fireEvent.click(flashcard);
    fireEvent.click(flashcard);
    expect(flashcardQuestion).toHaveTextContent(card.question);
  });
});

test('shuffles flashcards on shuffle button click', () => {
  const { getByTestId, getAllByTestId } = render(<App />);
  const flashcards = getAllByTestId(/flashcard-question-/);
  expect(flashcards.length).toEqual(flashCardsData.length);
  flashCardsData.forEach((card) => {
    const flashcardQuestion = getByTestId(`flashcard-question-${card.id}`);
    expect(flashcardQuestion).toHaveTextContent(card.question);
  });
  const shuffleButton = getByTestId('shuffle-button');
  fireEvent.click(shuffleButton);

  const originalQuestionsOrder = flashCardsData.map((card) => card.question);
  const shuffledQuestions = getAllByTestId(/flashcard-question-/).map(
    (element) => element.textContent
  );

  expect(shuffledQuestions).not.toEqual(originalQuestionsOrder);
});