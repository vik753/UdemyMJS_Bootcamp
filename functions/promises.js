// Calback
const getDataCalback = (calback) => {
    setTimeout(() => {
        // calback(undefined, 'This is the data');
        calback('This is calback error', undefined);
    }, 2000);
}

getDataCalback((error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
})

// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is the promise data');
        reject('This is the promise error.')
    }, 2000)
});

myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})

// V2
// myPromise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     })