const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=f7dad340bc2e67bd09fa4951917cee86';
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

fetch(forcastURL)
  .then((rsponse) => rsponse.json())
  .then((jsnObject) => {
    const forcastUTC = jsnObject['list'];
    let c = 1;
    forcastUTC.filter(row=>{
      return fiveDay().includes(row.dt * 1000)
    }).forEach(row => {
      var d = new Date(row.dt_txt); 
      document.getElementById('day' + c + '_label').textContent = days[d. getDay()];
      let temp = Math.round(((row.main.temp - 273.15) * 9/5 + 32) * 100) / 100;
      document.getElementById('day' + c + '_icon').setAttribute('src', `https://openweathermap.org/img/w/${row.weather[0].icon}.png`);
      document.getElementById('day' + c + '_temp').textContent = (temp + "\xB0 F");
      c++;
    })
    console.log(jsnObject);
  });


// Get UTC Timestamps for next 5 days
function fiveDay() {
  rightNow = new Date();// get current date
  let fiveDayUTC = new Array(5);
  sixPm = new Date(rightNow.setHours(18,0,0,0)); // forcast for tonight
  fiveDayUTC[0] = (rightNow.setHours(18,0,0,0));

  for (let i = 1; i < 6; i++) {
    fiveDayUTC[i] = (rightNow.setHours(18,0,0,0) + ((24 * 60 * 60 * 1000) * i)); 
  }
  return fiveDayUTC;
}  
  



