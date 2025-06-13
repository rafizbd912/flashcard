# FlashCard Pro

![](https://hrcdn.net/s3_pub/istreet-assets/k9tVJN7Ud511KaqA96hndQ/flashcards.gif)

A sleek, interactive flashcard application built with React and TypeScript to help you study Anywhere, Anytime.

---

## 🚀 Features

- **Flip-over Cards**  
  Tap or click any card to reveal the answer—and click again to flip it back to the question.
- **Shuffle Deck**  
  Randomize the order of your flashcards with one click, ensuring a fresh review session every time.
- **Responsive Layout**  
  Works beautifully on desktop and mobile screens.
- **Type-Safe Architecture**  
  All data models and component props are defined in TypeScript for maximum reliability.
- **Test-Ready Selectors**  
  Helpful `data-testid` attributes are in place for seamless integration with Jest & React Testing Library.

---

## 🛠️ Tech Stack

- **Framework:** React 17  
- **Language:** TypeScript  
- **Bundler:** Create React App  
- **Styling:** CSS Modules (or plain CSS)  
- **Testing:** Jest & React Testing Library  

---

## Environment 

- React Version: 17.0.2
- Languages: TypeScript, JavaScript
- Node Version: 14(LTS)
- Default Port: 8000


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

---
## Project Structure

flashcard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── FlashCard.tsx      # Single-card UI & flip logic
│   │   └── FlashCardDeck.tsx  # Deck container & shuffle control
│   ├── data/
│   │   └── cards-data.ts      # Flashcard question/answer pairs
│   ├── types/
│   │   └── FlashCard.ts       # Card data interface
│   ├── App.tsx
│   ├── index.tsx
│   └── App.test.tsx           # Core component tests
└── package.json
