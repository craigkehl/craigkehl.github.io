

const forcastURL = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=f7dad340bc2e67bd09fa4951917cee86';

fetch(forcastURL)
  .then((rsponse) => rsponse.json())
  .then((jsnObject) => {
    console.log(jsnObject);

  });




  // Copy & Paste this
Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

// Get the current time as Unix time
var currentUnixTime = Date.time();
currentUnixTime = Date.now().getUnixTime(); // same as above

// Parse a date and get it as Unix time
var parsedTime = new Date('Sun, 15 Mar 2020 18:00:00 MST').getUTCMilliseconds();


