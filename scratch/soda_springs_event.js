const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
// Load the array with the towns you wish to pull data about
const tList = ['Soda Springs'];

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })   // Retrieve and convert to json
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.filter(town=>{   // set callback to filter for requested towns
      return tList.includes(town.name)
    }).forEach(town => {     
      let localEvents = document.createElement('div');  // construct set per town 
      localEvents.className='localEvents';
      let localEventHeader = document.createElement('div');
      localEventHeader.className='localEventHeader';
      localEventHeader.textContent="Local Event";
      localEvents.appendChild(localEventHeader);

      let numOfEvents = 0;
      town.events.forEach(event => {    //retrieve events
        let localEventCard = document.createElement('div');  
        let localEventDate = document.createElement('div');
        let localEventInfo = document.createElement('div');
        let localEventDot = document.createElement('span');
        // Parse date from description data        
        let i = event.indexOf(":");
        localEventDate.textContent = event.substr(0, (i + 1));
        localEventInfo.textContent = event.substr(i + 2);
        // assemble event divs
        localEventCard.appendChild(localEventDate);
        localEventCard.appendChild(localEventInfo);
        localEventCard.appendChild(localEventDot);
        localEventCard.className='localEventCard';
        localEventDate.className='localEventDate';
        localEventInfo.className='localEventInfo';
        localEventDot.className='localEventDot';
        localEvents.appendChild(localEventCard);              
        ++numOfEvents
      });

        // push to page
     document.querySelector(`div.${town.name.replace(" ",'_')}_event`).appendChild(localEvents);
    })
});
 


      
