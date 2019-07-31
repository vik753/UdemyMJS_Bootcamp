const numWordsEl = document.querySelector('#numWords');
const resetEl = document.querySelector('#reset');
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game;

// Check numWords
const checkNumberWords = () => {
  // debugger
  let numWords = Number.parseFloat(numWordsEl.value);
  if (typeof numWords === 'number' && !isNaN(numWords)) {
    if (numWords < 0 || numWords > 9) {
      numWords = 1;
      alert('Number of words must be more than 0 and less than 10!');
    }
  } else {
    numWords = 1;
  }
  return numWords;
};

// render Html
  const renderHtml = () => {
    if (game._status === 'playing') {
      puzzleEl.textContent = game.puzzle();
      guessesEl.textContent = `You have ${game.remainingGuesses} chances`;
    }
    if (game._status === 'isWin') {
      puzzleEl.textContent = `Congretulations! You are winner! You guessed word - "${game.puzzle().toUpperCase()}".`;
      guessesEl.textContent = `You won by ${(Math.round(game.word.length / 3))} steps`;;
    }
    if (game._status === 'isLose') {
      puzzleEl.textContent = `Good try! Try again. Your guess word is - "${game.word.join('').toUpperCase()}".`;
      guessesEl.textContent = `You lost all your chances "${game.remainingGuesses}"`;
    }
  };

// Start Game
  const startGame = async () => {
    const numWords = checkNumberWords();
    await fetchWord(numWords).then((response) => {
      game = new Puzzle(response);
    }).catch((err) => console.log(err));
    renderHtml();
  };

  startGame();

// Reset click
  resetEl.addEventListener('click', async () => {
    await startGame();
    renderHtml();
    console.log(game);
    console.log(game.puzzle());
  });

// Keypress
  window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode).toLowerCase();
    game.makeGuess(guess);

    renderHtml();
    console.log(game);
  });