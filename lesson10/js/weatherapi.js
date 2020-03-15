const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=f7dad340bc2e67bd09fa4951917cee86';
var cTmp;
var wSpeed;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    console.log(wSpeed);
    document.getElementById('current-temp').textContent = Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100;
    wSpeed = jsObject.wind.speed;
    const humidity = jsObject.main.humidity;
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc; // display image source in paragraph
    document.getElementById('icon').setAttribute('src', imagesrc); // set the icon source 
    document.getElementById('icon').setAttribute('alt', desc);
    document.getElementById("humidty").textContent = humidity;
    document.getElementById('currently').textContent = desc;
    // Windchill
    
    const windChillDisp = document.getElementById("wChill");
    // const cTmp = parseFloat(document.getElementById("current-temp").textContent);
    cTmp = Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100;

  });

// const wSpeed = parseFloat(document.getElementById("wSpeed").textContent);

let calcWindChill = checkInput(wSpeed, cTmp);


function checkInput(ws, ct) {

  if (ws >= 4.8 && ct <= 50) { // make sure windspeed is at or above 4.8 mph and temp is at or below 50 degrees Fahrenheit. 
    
    let windchill = (35.74 + (.6215 * ct) - (35.75 * (Math.pow(ws, .16))) + (.4275 * (ct * (Math.pow(ws, .16)))));

    // document.getElementById("wChill").textContent = Math.floor(windchill);
    windChillDisp.innerHTML = Math.floor(windchill) + "&deg F";
  }
  else {
    
    windChillDisp = "Error";
  }
}