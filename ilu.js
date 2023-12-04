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

window.onload = function (_event) {
    const citySelect = document.getElementById("city")
    citySelect.onchange = populateCities

    populateCities(cities,citySelect)
}

function populateCities(cities,selectElement){
    let html = "<option>select a city</option>"
    for(let index = 0; index < cities.length; index+=1) {
        const currentCity = cities[index]
        html += `<option>${currentCity.name}</option>`
    }
    selectElement.innerHTML = html
}

function fetchData(event) {
    // Requires the Animate.css library:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">
function triggerCardAnimations () {
    const cards = document.querySelectorAll(".card")
    
    let index = 0
    const timerId = setInterval(animate, 150)

    function animate () {
        cards[index].classList.add("animate__animated", "animate__pulse")
        index += 1

        if (index >= cards.length) {
            clearInterval(timerId)
            return
        }
    }
}

}