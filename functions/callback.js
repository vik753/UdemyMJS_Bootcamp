// Variant1***********************
const tipper = (percent, amount, calback) => {
    calback(Math.round(amount * percent));
}

tipper(.15, 324, (calback) => {
    console.log(calback);
})

// Variant 2**********************
const getData = (firstName, lastName, calback) => {
    if (calback && typeof calback === 'function') {
        console.log(`${firstName} ${lastName}, ${calback()} years old`);
    } else {
        console.log(`${firstName} ${lastName}`);
    }
}

getData('Igor', 'Korenets', () => 2019 - 1975);
getData('Igor', 'Korenets');