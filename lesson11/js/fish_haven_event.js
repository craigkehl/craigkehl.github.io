const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
// Load the array with the towns you wish to pull data about
const tList = ['Fish Haven', 'Preston', 'Soda Springs'];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.filter(town=>{
      return tList.includes(town.name)
    }).forEach(town => {     
      let localEvents = document.createElement('div');
      localEvents.className='localEvents';
      let localEventHeader = ('div');
      localEventHeader.className='localEventHeader';
      localEventHeader.textContent = "Local<br>Event";

      let numOfEvents = 0;
      town.events.forEach(event => {
        let localEventCard = document.createElement('div');  //mySlides fade
        let localEventDate = document.createElement('div');
        let localEventInfo = document.createElement('div');
        let localEventDot = document.createElement('span');
        
        let i = event.indexOf(":");
        localEventDate.textContent = event.substr(0, (i + 1));
        localEventInfo.textContent = event.substr(i + 2);

        localEventDate.appendChild(localEventCard);
        localEventInfo.appendChild(localEventCard);
        localEventDot.appendChild(localEventCard);
        localEventCard.className='localEventCard';
        localEventDate.className='localEventDate';
        localEventInfo.className='localEventInfo';
        localEventDot.className='localEventDot';
        localEvents.appendChild(localEventCard);              
        ++numOfEvents
      });

     document.querySelector(`div.${town.name.replace(" ",'_')}_event`).appendChild(localEvents);
    })
});
 


      
