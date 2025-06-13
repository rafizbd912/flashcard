## React-TypeScript: FlashCard App

![](https://hrcdn.net/s3_pub/istreet-assets/k9tVJN7Ud511KaqA96hndQ/flashcards.gif)

Design flash card app that will display a series of flashcards with questions on the front and answers on the back using typescript and react. Certain core React functionalities are already implemented.

The application has two components: _FlashCardDeck.tsx_ and _FlashCard.tsx_ where all the functionalities will be implemented.

The component must have the following functionalities:

- Display a series of flashcards with questions on the front and answers on the back.
- Clicking a flashcard should flip it and reveal the answer on the back.
- Clicking a flashcard twice should flip and display the question again.
- Clicking the _Shuffle_ button should shuffles the order of the flashcards.
- Ensure the shuffled order of the flashcards is different from the original order(present in `src/data/cards-data.ts`).
- Update the _isFlipped_ constant to a state variable in _FlashCard/index.tsx_:
  - when _isFlipped_ is true _flipped_ is appended to _div's_ with class name _flashcard-content_.
  - when _isFlipped_ is false '' is appended to _div's_ with class name _flashcard-content_.
- All the types are defined under file _src/types/FlashCard.ts_

The following _data-testid_ attributes are required in the components for the tests to pass:

| **Attribute**                   | **Component**               |
|---------------------------------|-----------------------------|
| _flashcard-deck_                | Main FlashCardApp component |
| _flashcard-container-{card.id}_ | Individual FlashCard        |
| _flashcard-question-{card.id}_  | Question text in FlashCard  |
| _flashcard-answer-{card.id}_    | Answer text in FlashCard    |
| _shuffle-button_                | Button to Shuffle Cards     |

Note:

- Components have _data-testid_ attributes for test cases and certain classes and ids for rendering purposes. They should not be changed.
- The files that should be modified by the candidate are _src/components/FlashCardDeck.tsx_ and _src/components/FlashCard.tsx_.

## Environment 

- React Version: 17.0.2
- Node Version: 14(LTS)
- Default Port: 8000


**Read Only Files**
- `src/App.test.tsx`
- `src/types/FlashCard.ts`
- `src/data/cards-data.ts`


**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```

