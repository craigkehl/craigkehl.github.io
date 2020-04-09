const requestURL = 'https://craigkehl.github.io/Salmon_River_Adv/data/trips.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['trips'];
    console.log(jsonObject);
    guides.forEach(trip => {
      let card = document.createElement('section');
      let image = document.createElement('img');
      let divInfo = document.createElement('div');
      let gYears = document.createElement('span');
      let tLength = document.createElement('span');
      let tDates = document.createElement('span');
      let tName = document.createElement('h3');
      let tCost = document.createElement('h4');


      tName.textContent = trip.name;
      tCost.textContent = `COST: "${trip.Cost}"`;
      gYears.textContent = `DIFFICULTY:  ${trip.Difficulty}`;
      tLength.textContent = `LENGTH:  ${trip.Length}`;  
      tDates.textContent = `DATES:  ${trip.Dates}`;
      image.setAttribute ('src', trip.photo);
      image.setAttribute('alt', `Picture of ${trip.name}`);

      divInfo.appendChild(gYears);
      divInfo.appendChild(tLength);
      divInfo.appendChild(tDates);
      card.appendChild(image);
      card.appendChild(divInfo);
      card.appendChild(tName);
      card.appendChild(tCost);

      document.querySelector('div.trips_page').appendChild(card);     

    })
  });
