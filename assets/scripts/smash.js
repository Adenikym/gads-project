let modal=document.getElementById("my-modal");

document.getElementById("close").addEventListener("click", function () {
    modal.style.display="none"
});

document.getElementById("ham").addEventListener("click", function () {
    modal.style.display="flex"
});

window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  const api={
    key:"45268055b3a5a6c511f5432f7d710757",
    base:"https://api.openweathermap.org/data/2.5/",
    city:"New York"
}


 


  let old=  fetch(`${api.base}weather?q=${api.city}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(barColor)

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
