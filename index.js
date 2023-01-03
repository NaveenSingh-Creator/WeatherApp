// The full link
//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {

    key:"a19683992105b173a95509b2dc89a666",
    baseUrl:"https://api.openweathermap.org/data/2.5/weather?"

}

// Event listener function for keypress
// to obtain the data of the place which has been searched

const searchInputBox = document.getElementById("input-box");

searchInputBox.addEventListener("keypress",(event) => {
            if(event.keyCode == 13)
            {
                console.log(searchInputBox.value);
                getWeatherReport(searchInputBox.value);
            }
});

// get Data - get weather report

function getWeatherReport(city){
        fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
            .then(weather => weather.json())
            .then(showWeatherReport);
}
// show data - show weather report - show the changes on the screen

function showWeatherReport(weather){
    console.log(weather);

    let iconType = document.getElementById("icon");

    let cityName = document.getElementById("city")
    cityName.innerText =` ${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById("temp")
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minmaxTemp = document.getElementById("min-max")
    minmaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max)`;

    let weatherType = document.getElementById("weather-type")
    weatherType.innerText = `${weather.weather[0].main}`

    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate);

    if(weatherType.textContent == "Clear")
    {
        document.body.style.backgroundImage = "url(clear.jpg)";
        // iconType.innerHTML= "url(icons/clear.ico)";
    }
    else if(weatherType.textContent == "Clouds")
    {
        document.body.style.backgroundImage = "url(cloudy.jpg)";
        // iconType.innerHTML= "url(icons/cloud.ico)";
    }
    else if(weatherType.textContent == "Smoke")
    {
        document.body.style.backgroundImage = "url(images/cloudy.jpg)";
        // iconType.innerHTML= "url(icons/cloud.ico)";
    }
     else if(weatherType.textContent == "Haze")
    {
        document.body.style.backgroundImage = "url(cloudy.jpg)";
        // iconType.innerHTML= "url(icons/cloud.ico)";
    }

    else if(weatherType.textContent == "Rain")
    {
        document.body.style.backgroundImage = "url(raining.jpg)";
        // iconType.innerHTML= "url(icons/rain.ico)";

    }
    else if(weatherType.textContent == "Snow")
    {
        document.body.style.backgroundImage = "url(snow.jpg)";
        // iconType.innerHTML= "url(icons/snow.ico)";
    }
    else if(weatherType.textContent == "Sunny")
    {
        document.body.style.backgroundImage = "url(sunnyy.jpg)";
        // iconType.innerHTML= "url(icons/sun.ico)";
    }
    else if(weatherType.textContent == "Thunderstorm")
    {
        document.body.style.backgroundImage = "url(thunderstorm.jpg)";
        // iconType.innerHTML= "url(icons/storm.ico)";
    }


}

// date manage

const dateManage = (dateArg) =>{

    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const year = dateArg.getFullYear();
    const month = months[dateArg.getMonth()];
    const day = days[dateArg.getDay()];
    const date = dateArg.getDate();

    return `${date} ${month} ${year} (${day})`;

}

//  Manage the code so that if someone searchs for the country 
//  it should show the weather details of the capital of the country


// As soon as the page opens or deploys the weather that should be displayed 
// bydefault should be the real time weather of delhi
