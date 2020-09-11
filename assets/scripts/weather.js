
function newFunc () {
    if (localStorage.getItem("saved")) {
        let savedArray = JSON.parse(localStorage.getItem("saved"))
        let saved = savedArray[savedArray.length - 1]
        document.getElementById('searchtemp').innerHTML= `${Math.round(saved.temperature)} <span>°C</span> `;
        document.getElementById('searchcity').innerHTML=saved.cityName;
        document.getElementById("searchcondition").innerHTML=saved.nature;
 }
 };

 newFunc();


const api={
    key:"45268055b3a5a6c511f5432f7d710757",
    base:"https://api.openweathermap.org/data/2.5/",
    city:"New York"
}


 


  let old=  fetch(`${api.base}weather?q=${api.city}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayWeather)

    console.log(old)

function displayWeather (weather) {
    document.getElementById("tempnum").innerHTML=`${Math.round(weather.main.temp)} <span>°C</span> `;
    document.getElementById("name").innerHTML=`${weather.name}`;
    document.getElementById("nature").innerHTML=weather.weather[0].main;
    document.getElementById("humid").innerHTML=weather.main.humidity;
    document.getElementById("pres").innerHTML=weather.main.pressure;
    document.getElementById("wind").innerHTML=weather.wind.speed;


}

const searchbar= document.getElementById("searchbar");
const searchSign= document.getElementById("search-icon");
searchbar.addEventListener("keypress",setQuery);


function setQuery(evt) {
    if(evt.keyCode == 13) {
        getResults(searchbar.value);
        console.log(searchbar.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displaySearch)
    function displaySearch (weather) {
       
       
            document.getElementById('searchtemp').innerHTML= `${Math.round(weather.main.temp)} <span>°C</span> `;
           document.getElementById('searchcity').innerHTML=weather.name;
           document.getElementById("searchcondition").innerHTML=weather.weather[0].main;
       
        var temp=weather.main.temp;
        
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
    }

   


    






