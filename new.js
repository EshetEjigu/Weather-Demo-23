


//
"use strict";

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
];

window.onload = function () {
    const citySelect = document.getElementById("city");
    populateCities(cities, citySelect);
    citySelect.onchange = handleCityChange; 
};

function populateCities(cities, selectElement) {
    let html = "<option>Select a city</option>";
    for (let index = 0; index < cities.length; index += 1) {
        const currentCity = cities[index];
        html += `<option value="${currentCity.latitude},${currentCity.longitude}">${currentCity.name}</option>`;
    }
    selectElement.innerHTML = html;
}

function handleCityChange (event) {
    const selectedCoordinates = event.target.value  // "23.0233,-34.0912"
    fetch(`https://api.weather.gov/points/${selectedCoordinates}`)
        .then(response => response.json())
        .then(data => getForecast(data.properties.forecast))
        
}

function getForecast(forecastURL){
    if (forecastURL === null) {
        const forecastResults = document.getElementById("forecastResults")
        forecastResults.innerHTML = `<h3>FORECAST UNAVAILABLE</h3>`
    }

    fetch(forecastURL)
        .then(response => response.json())
        .then(data => displayForecast(data.properties.periods))
}

function displayForecast(forecastArray){
    let html = ``
    for (let index = 0; index < forecastArray.length; index++) {
        const weather = forecastArray[index];
        html += `
            <div class="card" style="width: 18rem;">
                <img src="${weather.icon}" class="card-img-top" alt="${weather.shortForecast}">
                <div class="card-body">
                    <h5 class="card-title">${weather.name}</h5>
                    <p class="card-text">${weather.detailedForecast}</p>
                </div>
            </div>
        `
        
    }
    const forecastResults = document.getElementById("forecastResults")
    forecastResults.innerHTML = html
}

// function fetchData() {
//     const selectedCity = document.getElementById("city").value; 

//     fetchForecast(selectedCity)
//         .then(function (forecastData) {
          
//             updateForecastUI(forecastData);
//         })
//         .catch(function (error) {
//             console.error(`Error fetching forecast: ${error}`);
//         });
// }


// function fetchForecast(cityName) {

//     return new Promise(function (resolve) {
       
//         const dummyData = {
          
//             city: cityName,
//             temperature: "25°C",
//             conditions: "Sunny",
          
//         };
//         resolve(dummyData);
//     });
// }


// function updateForecastUI(forecastData) {
    
//     const forecastContainer = document.getElementById("forecast");
//     forecastContainer.innerHTML = `
//         <h2>${forecastData.city} Forecast</h2>
//         <p>Temperature: ${forecastData.temperature}</p>
//         <p>Conditions: ${forecastData.conditions}</p>
//         <!-- Add more forecast details as needed -->
//     `;
// }
