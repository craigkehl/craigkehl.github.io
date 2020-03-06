const town_list = ["Fish Haven", "Preston", "Soda Springs"];

// source URL
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary chcking for valid response and data parsing    
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == Fish)
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let bDate = document.createElement('p');
      let bPlace = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      bDate.textContent = 'Date of Birth: '+ prophets[i].birthdate;
      bPlace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
      image.setAttribute ('src', prophets[i].imageurl);
      image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

      card.appendChild(h2);
      card.appendChild(bDate);
      card.appendChild(bPlace);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });