const getData = (num) => new Promise((resolve, reject) => {
return typeof num === 'number' ? resolve(num * 2) : reject('Nember must be provided');
})

const getProcessData = async () => {//Always return PROMISE!!!
    let data = await getData(2); //await this function before go on
    data = getData(data);
    return data;
}

getProcessData()
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((err) => console.log(err))