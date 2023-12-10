const apikey = "54e8c8df119a44d38757f903f06e7a1a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const responce = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await responce.json();

    console.log(data);

    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }
}

searchBox.addEventListener("keydown", (event)=>{
    if(event.key=='Enter'){
        checkWeather(searchBox.value);
    }
})

searchBtn.addEventListener("click", ()=>{checkWeather(searchBox.value);})