function refreshWeather(response) {
    let temperature = document.querySelector("#temperature"); 
    
    console.log(response.data.temperature.current);
    
    
    
}



function searchCity(city) {
let apiKey ="14caa9243e405tff81o8bbec43672063";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
axios.get(apiUrl).then(refreshWeather);
}



function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let city = document.querySelector("#city");
    city.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}



let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

