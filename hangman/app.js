const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman("New York leave", 3);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.status;
console.log(game1.status);

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.status;
    console.log(game1.status);
});

// ***** Synchronous request Promise **********
getPuzzle('2')
    .then((data) => console.log(data.puzzle))
    .catch((err) => console.log(err));

// *** Country request Promise ***
getCountry('US')
    .then((country) => console.log(country.name))
    .catch((err) => console.log(err));

// ***** Get puzzle - fetch Promise **********
// fetch('http://puzzle.mead.io/puzzle?wordCount=4', {})
//     .then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch the puzzle')
//         }
//     })
//     .then((data) => {
//         console.log(data.puzzle);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// ******* Country request ***********
// getCountry("MD", (countryData, error) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(`Country name is: ${countryData.name}`);
//     }
// })

// ********** Asynchronous request **********
// getPuzzle("3", (error, puzzle) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(puzzle);
//     }
// });

// ********** Synchronous request **********
// const puzzle = getPuzzleSync();
// console.log(puzzle);
// console.log('Hello');

// Making the HTTP request
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const newObj = new Object(data);
//     } else if (e.target.readyState ===4) {
//         console.log('An error place');
//     }
// })

// request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3');
// request.send();