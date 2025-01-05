const wordEl = document.querySelector(".word");
const oldWordsEl = document.querySelector(".old-words");

//Wortliste
let words = [];
let currentWord = "";
let previousWords = [];

fetch("words.txt")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    words = text.split(",");
  });

// Das hier passiert, wenn wir auf den Button klicken
function onClick() {
  if (currentWord) {
    previousWords.push(currentWord);
    oldWordsEl.innerHTML = previousWords.join(", ");
  }
  // Neues Wort generieren und als aktuelles Wort speichern
  currentWord = getRandomWord();
  // Danach aktualisieren wir unsere Website, um das neue Wort auszugeben
  wordEl.innerHTML = currentWord;
}

function getRandomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber);
}

function getRandomWord() {
  return words[getRandomNumber(words.length)];
}
