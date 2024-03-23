const apiKey = "47f818a8a0b09c4b826cafee6c38c853";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIco = document.querySelector(".weathIco");
async function checkWeath(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    if(data.weather[0].main == "Clouds")
    {
        weatherIco.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIco.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIco.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIco.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIco.src = "images/mist.png";
    }
}
searchBtn.addEventListener("click", ()=> 
{
    checkWeath(searchBox.value);
});