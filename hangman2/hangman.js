class Puzzle {
  constructor(word) {
    this.word = word.toLowerCase().trim().split('');
    this.remainingGuesses = Math.round(this.word.length / 3);
    this.guessedLetters = [];
    this._status = 'playing';
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

  // Make guess
  makeGuess(guess) {
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.join('').includes(guess);
    // console.log(guess);
    if(guess && this._status === 'playing') {
      if (isUnique) {
        this.guessedLetters.push(guess);
      }
      if (isUnique && isBadGuess) {
        this.remainingGuesses--;
      }
      this.calculateStatus();
    } else {
      return;
    }
  }

  // Calculate status
  calculateStatus() {
    const isWin = this.word.join('') === this.puzzle;
    const isLose = !isWin && this.remainingGuesses === 0;
    console.log(`isWin: ${isWin}. isLose: ${isLose}`);

    if (this._status === 'playing') {
      if (isLose) {
        this._status = 'isLose';
      }
      if (isWin) {
        this._status = 'isWin';
      }
    }
  }

}







