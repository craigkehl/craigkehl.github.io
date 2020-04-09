const requestURL = 'https://craigkehl.github.io/Salmon_River_Adv/data/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const guides = jsonObject['guides'];
    console.log(jsonObject);
    guides.forEach(guide => {
      let card = document.createElement('section');
      let image = document.createElement('img');
      let divInfo = document.createElement('div');
      let gYears = document.createElement('span');
      let gHome = document.createElement('span');
      let gEduc = document.createElement('span');
      let tName = document.createElement('h3');
      let tMotto = document.createElement('h4');


      tName.textContent = `${guide.firstname} ${guide.lastname}`;
      tMotto.textContent = `MY MOTTO:\n"${guide.motto}"`;
      gYears.textContent = `YEARS EXPERIENCE: ${guide.yrsexperience}`; //complete Years of Experience
      gHome.textContent = `HOMETOWN: ${guide.hometown}`;  // complete string
      gEduc.textContent = `EDUCATION: ${guide.education}`;   // complete string Education background
      image.setAttribute ('src', guide.photo);
      image.setAttribute('alt', `Picture of ${guide.firstname} ${guide.lastname}`);

      divInfo.appendChild(gYears);
      divInfo.appendChild(gHome);
      divInfo.appendChild(gEduc);
      card.appendChild(image);
      card.appendChild(divInfo);
      card.appendChild(tName);
      card.appendChild(tMotto);

      document.querySelector('div.guides').appendChild(card);     

    })
  });
