const countries = {
    countryArr: [],
    countryCode: 'default',
    country: [],
    bordersLinks: [],
    filter: '',
}

const searchElement = document.querySelector('#search');
const slectorElement = document.querySelector('#countries');
const populationEl = document.querySelector('#population');
const flagElement = document.querySelector('#flag');
const bordersEl = document.querySelector('#borders');

// send request
sendRequest((countriesArray, error) => {
    if (!error) {
        countries.countryArr = countriesArray;
        //console.log(countries.countryArr);
        fillCountrySelector(slectorElement, countries.countryArr);
    } else {
        console.log(error);
    }
});

// render html
const renderHtml = () => {
    fillPopulation(populationEl, countries.country);
    setFlag(flagElement, countries.country);
    fillBorders(bordersEl, countries.country, (bordersLinks) => {

        bordersLinks.forEach((border) => {
            const el = document.querySelector(`#${border}`);
            el.addEventListener('click', (e) => {
                e.preventDefault();

                countries.country = countries.countryArr.find((country, index) => {
                    countries.countryCode = index;
                    return country.alpha3Code === border;
                });
                slectorElement.selectedIndex = ++countries.countryCode;
                resetHtml();
                renderHtml();
            })
        });

    });
}

// selector events
slectorElement.addEventListener('change', (e) => {
    //console.log(countries);
    countries.countryCode = slectorElement.value;

    if (countries.countryCode === 'default') {
        populationEl.textContent = 'Population:'
        flagElement.style.visibility = 'hidden';
        bordersEl.textContent = 'Borders:';

        resetData();
    } else {
        countries.countryCode = slectorElement.value;
        countries.country = countries.countryArr[countries.countryCode];

        resetHtml();
        renderHtml();
    }
});

// search events
searchElement.addEventListener('input', (event) => {
    const text = event.target.value.trim().toLowerCase();
    const filteredCountry = countries.countryArr.find((country, index) => {
        countries.countryCode = index;
        return country.name.toLowerCase().includes(text);
    });
    console.log(filteredCountry);
    if (filteredCountry) {
        countries.country = filteredCountry;
        slectorElement.selectedIndex = ++countries.countryCode;
        renderHtml();
    }
});


