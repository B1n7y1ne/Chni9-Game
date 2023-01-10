// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {

  let span = document.createElement("span");

  let theLetter = document.createTextNode(letter);

  span.appendChild(theLetter);

  span.className = 'letter-box';

  lettersContainer.appendChild(span);

});

// Object Of Words + Categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  philosophers: ["Albert Einstein", "Descartes ", "David Hume", " Kant", "Socrates"],
 Arabecountries: ["Syria", "Palestine", "Morroco", "Egypt", "Bahrain", "Qatar"]
}


let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);

let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];

let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

let randomValueValue = randomPropValue[randomValueNumber];

document.querySelector(".game-info .category span").innerHTML = randomPropName;

let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersAndSpace = Array.from(randomValueValue);

lettersAndSpace.forEach(letter => {

  let emptySpan = document.createElement("span");

  if (letter === ' ') {

    emptySpan.className = 'with-space';

  }

  lettersGuessContainer.appendChild(emptySpan);

});

let guessSpans = document.querySelectorAll(".letters-guess span");

let wrongAttempts = 0;

let theDraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e) => {

  let theStatus = false;

  if (e.target.className === 'letter-box') {

    e.target.classList.add("clicked");

    let theClickedLetter = e.target.innerHTML.toLowerCase();

    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, WordIndex) => {

      if (theClickedLetter == wordLetter) {

        theStatus = true;

        guessSpans.forEach((span, spanIndex) => {

          if (WordIndex === spanIndex) {

            span.innerHTML = theClickedLetter;

          }

        });

      }

    });

    // Outside Loop

    if (theStatus !== true) {

      wrongAttempts++;

      theDraw.classList.add(`wrong-${wrongAttempts}`);

      // Play Fail Sound
      document.getElementById("fail").play();

      if (wrongAttempts === 8) {

        endGame();

        lettersContainer.classList.add("finished");

      }

    } else {

      // Play Success Sound
      document.getElementById("success").play();

    }

  }

});

// End Game Function
function endGame() {

  let div = document.createElement("div");

  let divText = document.createTextNode(`Lkelma alhmar heya :   ${randomValueValue}`);

  div.appendChild(divText);

  div.className = 'popup';

  document.body.appendChild(div);

}