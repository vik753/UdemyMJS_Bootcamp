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
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('There must be the number provided.')
    }, 2000)
});

getDataPromise(2)
    .then((num) => {
        return getDataPromise(num);
    })
    .then((num) => {
        return getDataPromise(num);
    })
    .then((num) => {
        console.log(num);
    })
    .catch((err) => {
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