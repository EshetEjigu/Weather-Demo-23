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

function handleCityChange(event) {
    const selectedCoordinates = event.target.value; // "39.79303691145844,-86.15616806469983"
    
    // Fetch the forecast URL
    fetch(`https://api.weather.gov/points/${selectedCoordinates}`)
        .then(response => response.json())
        .then(data => {
            const forecastUrl = data.properties.forecast;

            // Fetch the actual forecast data
            return fetch(forecastUrl);
        })
        .then(response => response.json())
        .then(forecastData => {
            // Update the DOM with the forecast data
            updateForecastUI(forecastData);
            function updateForecastUI(forecastData) {
                const forecastContainer = document.getElementById("forecast");
            
                // Check if the forecastData has the expected structure
                if (forecastData && forecastData.properties && forecastData.properties.periods) {
                    const forecastPeriods = forecastData.properties.periods;
            
                    // Clear previous forecast content
                    forecastContainer.innerHTML = "";
            
                    // Loop through forecast periods and display information
                    forecastPeriods.forEach(period => {
                        const forecastElement = document.createElement("div");
                        forecastElement.innerHTML = `
                            <h3>${period.name}</h3>
                            <p>${period.temperature}${period.temperatureUnit}</p>
                            <p>${period.shortForecast}</p>
                            <p>${period.detailedForecast}</p>
                        `;
            
                        forecastContainer.appendChild(forecastElement);
                    });
                } else {
                    // Handle unexpected data structure
                    console.error("Unexpected forecast data structure:", forecastData);
                }
            }
            
        })
        .catch(error => {
            console.error(`Error fetching forecast: ${error}`);
        });
}

function updateForecastUI(forecastData) {
    // Implement logic to update the DOM with forecast data
    // For example, display relevant forecast information on the page
    console.log("Forecast Data:", forecastData);
    // Update the DOM elements as needed
}