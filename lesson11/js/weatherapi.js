const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=f7dad340bc2e67bd09fa4951917cee86';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const cTmp = Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100;
    document.getElementById("currently").textContent = jsObject.weather[0].description;
    document.getElementById("humidty").textContent = jsObject.main.humidity + "%";
    document.getElementById('current-temp').textContent = Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100;
    document.getElementById("wChill").textContent = checkInput(jsObject.wind.speed, cTmp);
    document.getElementById('wSpeed').textContent = jsObject.wind.speed + " mph";
    function checkInput(ws, ct) {
      if (ws >= 4.8 && ct <= 50) { // make sure windspeed is at or above 4.8 mph and temp is at or below 50 degrees Fahrenheit.    
        let windchill = (35.74 + (.6215 * ct) - (35.75 * (Math.pow(ws, .16))) + (.4275 * (ct * (Math.pow(ws, .16)))));  
        return String(Math.floor(windchill)) + "\xB0 F";      
      }
      else {  
        return "very low";
      }
    }
   
    document.getElementById("temp").textContent = Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100; 
    document.getElementById("ricky").textContent = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    document.getElementById("bob").setAttribute('src', `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`);
    document.getElementById("bob").setAttribute('alt', jsObject.weather[0].description);
});