"use strict"


const cities = [
    {
        name: "Indianapolis, IN",
        latitude: 39.79303691145844,
        longitude: -86.15616806469983,
    },
    {
        name: "Anchorage, AK",
        latitude: 61.21793482390542,
        longitude: -149.9001050732621,
    },
    {
        name: "Renton, WA",
        latitude: 47.48002580027486,
        longitude: -122.20512725433403,
    },
    {
        name: "Washington, PA",
        latitude: 40.17412934199111,
        longitude: -80.24893021016534,
    },
    {
        name: "Dexter, MO",
        latitude: 36.795516838474775,
        longitude: -89.95833599547308,
    },
    {
        name: "Duluth, MN",
        latitude: 46.78603170717839,
        longitude: -92.09856041348712,
    },
]


// 1. Populate city select element with city names from the city array above.
// 2. onchange event handler which finds the latitude & longitude for selected city 
// 3. fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
// 4. Then get the forecast URL using "data.properties.forecast"
//                                 or "data.properties.forecastHourly"
// 5. fetch(data.properties.forecastHourly)
// 6. Loop through the array of forecast periods (data.properties.periods)
// 7. Display a forecast for each forecast period.


window.onload = function () {
    const selectedCity = Document.getElementById("cityList");
    populateCityDropdown(cityArray, selectedCity);
    populateCityForecasts();
    console.log("The page has loaded!");
};

function populateCityForecasts() {

    cities.forEach(function (city) {

        fetchForecast(city.latitude, city.longitude)
            .then(function (forecastData) {
                updateCityForecast(city.name, forecastData);
            })
            .catch(function (error) {
                console.error(`Error fetching forecast for ${city.name}: ${error}`);
            });
    });
}


function fetchForecast(latitude, longitude) {

    return new Promise(function (resolve) {

        const dummyData = {

        };
        resolve(dummyData);
    });
}


function updateCityForecast(cityName, forecastData) {

    console.log(`Forecast for ${cityName}:`, forecastData);

}





