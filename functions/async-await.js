const getData = (num) => new Promise((resolve, reject) => {
return typeof num === 'number' ? resolve(num * 2) : reject('Nember must be provided');
})

const getProcessData = async () => {//Always return PROMISE!!! and works only with Promises
    let data = await getData(2); //await - next function is waiting for executing this func
    data = await getData(data);
    data = await getData(data);
    return data;
}

getProcessData()
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((err) => console.log(err))