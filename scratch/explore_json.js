// source URL
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    towns.forEach(town => {
      let card = document.createElement('section');
      let divH = document.createElement('div');
      let tName = document.createElement('h3');
      let tMotto = document.createElement('p');
      let divD = document.createElement('div');
      let tFoundH = document.createElement('h5');
      let tFoundData = document.createElement('p');
      let tPopH = document.createElement('h5');
      let tPopData = document.createElement('p');
      let tRainH = document.createElement('h5');
      let tRainData = document.createElement('p');
      let image = document.createElement('img');

      tName.textContent = town.name;
      tMotto.textContent = town.motto;
      tFoundH.textContent = "Founded";
      tFoundData.textContent = town.yearFounded;
      tPopH.textContent = "Population";
      tPopData.textContent = town.currentPopulation;
      tRainH.textContent = "Annual Rainfall";
      tRainData.textContent = town.averageRainfall;
      image.setAttribute ('src', `images/${town.photo}`);
      image.setAttribute('alt', `Pictue of ${town.name}`);

      divH.appendChild(tName);
      divH.appendChild(tMotto);
      divD.appendChild(tFoundH);
      divD.appendChild(tFoundData);
      divD.appendChild(tPopH);
      divD.appendChild(tPopData);
      divD.appendChild(tRainH);
      divD.appendChild(tRainData);
      card.appendChild(divH);
      card.appendChild(divD);
      card.appendChild(image);

      document.querySelector('div.townCards').appendChild(card);
    })
  });