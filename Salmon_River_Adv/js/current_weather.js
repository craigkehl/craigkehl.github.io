const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4092267&APPID=f7dad340bc2e67bd09fa4951917cee86';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const cTmp = Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100;
    document.getElementById("current_icon").setAttribute('alt', `${jsObject.weather[0].description}`);
    document.getElementById("current_icon").setAttribute('src', `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`);   
    document.getElementById('current-temp').textContent = `${Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100}F`;    
});