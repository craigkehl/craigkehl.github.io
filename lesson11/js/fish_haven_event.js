const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
// Load the array with the towns you wish to pull data about
const tList = ['Fish Haven'];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.filter(town=>{
      return tList.includes(town.name)
    }).forEach(town => {
      let cnt = 0;  
      town.events.forEach(event => {
        let localEventDate = document.createElement('div');
        let localEventInfo = document.createElement('div');
        localEventDate.id=`eventDate${cnt}`;
        localEventInfo.id=`eventInfo${cnt}`;
        localEventDate.className="eventDate";
        localEventInfo.className="eventInfo";   
        let i = event.indexOf(":");
        localEventDate.textContent = event.substr(0, (i + 1));
        localEventInfo.textContent = event.substr(i + 2);
        document.querySelector("div.Fish_Haven_event").appendChild(localEventDate);
        document.querySelector("div.Fish_Haven_event").appendChild(localEventInfo);
        ++cnt;
      });
    })
});             