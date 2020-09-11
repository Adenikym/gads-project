
const mobile={
    key:"c8e9f7c4c05b5ce22da8f644f8f4bb08",
    base:"https://api.openweathermap.org/data/2.5/"
}

const searchbox= document.getElementById("mobile-icon");
searchbox.addEventListener("keypress",mobileQuery);

function mobileQuery(evt) {
    if(evt.keyCode == 13) {
        mobileResults(searchbox.value);
        console.log(searchbox.value);
    }
}

function mobileResults (query) {
    fetch(`${mobile.base}weather?q=${query}&units=metric&APPID=${mobile.key}`)
    .then(weather => {
        return weather.json();
       
    }).then(mobileSearch);
   
    function mobileSearch (weather) {
       
       
            document.getElementById('mobtemp').innerHTML= `${Math.round(weather.main.temp)} <span>°C</span> `;
           document.getElementById('mobcity').innerHTML=weather.name;
           document.getElementById("mobcon").innerHTML=weather.weather[0].main;
       
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