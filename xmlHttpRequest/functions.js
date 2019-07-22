// send request
const sendRequest = (calback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const countries = [];
            data.forEach((country) => countries.push(country));
            calback(countries, undefined);
        } else if (e.target.readyState === 4) {
            calback(`Error: ${e}`, undefined);
        }
    })

    request.open('GET', 'https://restcountries.eu/rest/v2/all');
    request.send();
}

// reset data
const resetData = () => {
    countries.countryCode = null;
    countries.country = [];
    countries.bordersLinks = [];
    countries.filter = '';
}

// fiil select
const fillCountrySelector = (sletorElement, countryArr) => {
    // console.log(countryArr);
    countryArr.forEach((country, index) => {
        const newOption = document.createElement('option');
        newOption.setAttribute('value', `${index}`);
        newOption.textContent = country.name;
        sletorElement.appendChild(newOption);
    });
}

//fill population
const fillPopulation = (populationEl, country) => {
    populationEl.textContent = `Population: ${new Intl.NumberFormat().format(country.population)}`;
}

// set flag
const setFlag = (flagElement, country) => {
    flagElement.setAttribute('src', country.flag);
    flagElement.style.visibility = 'visible';
}

// fill borders
const fillBorders = (bordersEl, country, calback) => {
    const borders = country.borders;
    bordersEl.innerHTML = `Borders: `;

    if (borders.length > 0) {
        const bordersLinks = [];

        for (let x = 0; x < borders.length; x++) {
            if (x === borders.length - 1) {
                bordersEl.innerHTML += `<a href="/" id="${borders[x]}">${borders[x]}</a>`;
                bordersLinks.push(borders[x]);
            } else {
                bordersEl.innerHTML += `<a href="/" id="${borders[x]}">${borders[x]}</a>, `;
                bordersLinks.push(borders[x]);
            }
        }
        countries.bordersLinks = bordersLinks;   
        calback(bordersLinks);     
    }
}