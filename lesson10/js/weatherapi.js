const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=f7dad340bc2e67bd09fa4951917cee86';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = Math.round(((jsObject.main.temp - 273.15) * 9/5 + 32) * 100) / 100;
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const desc = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent = imagesrc; // display image source in paragraph
    document.getElementById('icon').setAttribute('src', imagesrc); // set the icon source 
    document.getElementById('icon').setAttribute('alt', desc);

  });