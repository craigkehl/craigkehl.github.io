const requestURL = 'https://craigkehl.github.io/Salmon_River_Adv/data/trips.json';
const page = document.getElementById('page').className;


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const trips = jsonObject['trips'];
    console.log(jsonObject);
    trips.forEach(trip => {
      if (page.includes('trips_page')) {
        
        let card = document.createElement('section');
        let image = document.createElement('img');
        let divInfo = document.createElement('div');
        let gYears = document.createElement('span');
        let tLength = document.createElement('span');
        let tDates = document.createElement('span');
        let tName = document.createElement('h3');
        let tCost = document.createElement('h4');
        let tOrder = document.createElement('a');

        tName.textContent = trip.name;
        tCost.textContent = `COST: ${trip.Cost}`;
        gYears.textContent = `DIFFICULTY:  ${trip.Difficulty}`;
        tLength.textContent = `LENGTH:  ${trip.Length}`;  
        tDates.textContent = `DATES:  ${trip.Dates}`;
        image.setAttribute ('src', trip.photo);
        image.setAttribute('alt', `Picture of ${trip.name}`);
        tOrder.setAttribute('href', "reservations.html");
        tOrder.textContent = "Reserve Now";

        divInfo.appendChild(gYears);
        divInfo.appendChild(tLength);
        divInfo.appendChild(tDates);
        divInfo.appendChild(tOrder);
        card.appendChild(image);
        card.appendChild(divInfo);
        card.appendChild(tName);
        card.appendChild(tCost);

        document.querySelector('div.trips_page').appendChild(card);

      }
      else if (page == 'reservations') {
        let listOp = document.createElement('option');
        listOp.value = `"${trip.name}" (${trip.Length}, ${trip.Difficulty}, ${trip.Cost} ea.)`;

        document.getElementById('trip_list').appendChild(listOp);
      }    

    })
    
   

  });

  /*** range function */

  if(page.includes('reservations')) {
    function countAdjust(value) {
      document.getElementById("guest_number").innerHTML = value;
    }


  }