// Promise getPuzzle + fetch
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Unable to fetch the puzzle');
            }
        })
        .catch((err) => console.log(err));
}

// Country request 'https://restcountries.eu/rest/v2/all'
const getCountry = (countryCode) => {
    return fetch('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Unable fetch the country')
            }
        })
        .then((countries) => countries.find((country) => country.alpha2Code === countryCode))
        .catch((error) => console.log(error));
}

//Asynchronous request
// const getPuzzle = (wordCount, callback) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             callback(undefined, data.puzzle);
//         } else if (e.target.readyState === 4) {
//             const errorText = e.target.responseText;
//             const errorStatus = e.target.status;
//             const errorStatusText = e.target.statusText;
//             callback(`Error:${errorText}; Status:${errorStatus}; StatusText:${errorStatusText}`, undefined);
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// }

//Synchronous request
// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false);
//     request.send();

//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         return (data.puzzle);
//     } else if (request.readyState === 4) {
//         const errorText = request.responseText;
//         const errorStatus = request.status;
//         const errorStatusText = request.statusText;
//         throw Error(`${errorText}; Status:${errorStatus}; StatusText:${errorStatusText}`);
//     }
// }

// Promise getPuzzle
// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle);
//         } else if (e.target.readyState === 4) {
//             const errorText = e.target.responseText;
//             const errorStatus = e.target.status;
//             const errorStatusText = e.target.statusText;
//             reject(`Error:${errorText}; Status:${errorStatus}; StatusText:${errorStatusText}`);
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// });

// Country request
// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();
//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const countryData = JSON.parse(e.target.responseText);
//             const country = countryData.find((country) => country.alpha2Code === countryCode);
//             if (country) {
//                 resolve(country);
//             } else {
//                 reject(`Error: ${e.target}`);
//             }
//         } else if (e.target.readyState === 4) {
//             reject(e.target.responseText);
//         }
//     });

//     countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
//     countryRequest.send();
// });


// const getCountry = (countryCode, calback) => {
//     const countryRequest = new XMLHttpRequest();

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const countryData = JSON.parse(e.target.responseText);
//             const country = countryData.find((country) => country.alpha2Code === countryCode);
//             if (country) {
//                 calback(country, undefined);
//             } else {
//                 calback(undefined, `Error: ${e.target}`);
//             }
//         } else if (e.target.readyState === 4) {
//             calback(undefined, e.target.responseText);
//         }
//     });

//     countryRequest.open('GET', 'https://restcountries.eu/rest/v2/all');
//     countryRequest.send();
// }