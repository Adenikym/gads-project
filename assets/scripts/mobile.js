const searchbar= document.getElementById("searchbar");
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