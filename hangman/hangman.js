/*const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
  this.status = 'playing'
}*/

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this._status = 'playing';
  }

  calculateStatus() {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ');

    if (this.remainingGuesses === 0) {
      this._status = 'failed';
    } else if (finished) {
      this._status = 'finished';
    } else {
      this._status = 'playing';
    }
  }

  get puzzle() {
    let puzzle = '';

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === ' ') {
        puzzle += letter;
      } else {
        puzzle += '*';
      }
    });

    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this._status !== 'playing') {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }

    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }

    this.calculateStatus();
  }

  get status() {
    const playing = `Guess left ${this.remainingGuesses}`;
    const failed = `Nice try! The word was "${this.word.join('').toUpperCase()}".`;
    const finished = `Great work! You guessed the word!`;

    switch (this._status) {
      case 'finished' :
        return finished;
      case 'failed' :
        return failed;
      default:
        return playing;
    }
  }

  set status(val) {
    this._status = val;
  }

}

/*Hangman.prototype.calculateStatus = function () {
  const finished = this.word.every((letter) => this.guessedLetters.includes(letter))

  if (this.remainingGuesses === 0) {
    this.status = 'failed'
  } else if (finished) {
    this.status = 'finished'
  } else {
    this.status = 'playing'
  }
}*/

/*Hangman.prototype.getPuzzle = function () {
  let puzzle = ''

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter
    } else {
      puzzle += '*'
    }
  })

  return puzzle
}*/

/*Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase()
  const isUnique = !this.guessedLetters.includes(guess)
  const isBadGuess = !this.word.includes(guess)

  if (this.status !== 'playing') {
    return;
  }

  if (isUnique) {
    this.guessedLetters.push(guess)
  }

  if (isUnique && isBadGuess) {
    this.remainingGuesses--
  }

  this.calculateStatus()
};*/

/*Hangman.prototype.getStatus = function () {
  const playing = `Guess left ${this.remainingGuesses}`;
  const failed = `Nice try! The word was "${this.word.join('').toUpperCase()}".`;
  const finished = `Great work! You guessed the word!`;

  switch (this.status) {
    case 'finished' :
      return finished;
    case 'failed' :
      return failed;
    default:
      return playing;
  }
};*/

