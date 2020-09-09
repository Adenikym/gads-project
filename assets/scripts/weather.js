
const api={
    key:"45268055b3a5a6c511f5432f7d710757",
    base:"https://api.openweathermap.org/data/2.5/",
    city:"New York"
}


 


  let old=  fetch(`${api.base}weather?q=${api.city}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayWeather).then(barColor)

    console.log(old)

function displayWeather (weather) {
    document.getElementById("tempnum").innerHTML=`${Math.round(weather.main.temp)} <span>°C</span> `;
    document.getElementById("name").innerHTML=`${weather.name}`;
    document.getElementById("nature").innerHTML=weather.weather[0].main;
    document.getElementById("humid").innerHTML=weather.main.humidity;
    document.getElementById("pres").innerHTML=weather.main.pressure;
    document.getElementById("wind").innerHTML=weather.wind.speed;


}

function saveSearches (weather) {
var temp= weather.main.temp;
var condition=weather.weather[0].main;
var regionName=weather.name;

var saveObject= {
    cityName:regionName,
    nature:condition,
    temperature:temp
}

if(localStorage.getItem("saved")=== null){
    var saved=[];
    saved.push(saveObject);
    localStorage.setItem("saved", JSON.stringify(saved));
}

else {
    var saved= JSON.parse(localStorage.getItem("saved"));
    saved.push(saveObject);
    localStorage.setItem("saved", JSON.stringify(saved));
}

}

function barColor(){



document.querySelectorAll(".bar").forEach(bar=>
    {
        weather => {
            if(weather.main.temp<=30) {
                bar.style.backgroundColor="yellow"
            }

            else {
                bar.style.backgroundColor="red"
            }
        }
    })
}

