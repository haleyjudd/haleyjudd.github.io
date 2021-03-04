const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const prophets = jsonObject['prophets'];

  const cards = document.querySelector('.cards');

   prophets.forEach(prophet => {
    let card = document.createElement('section');

    let h2 = document.createElement('h2');
    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    card.appendChild(h2);

    let image = document.createElement('img');
    image.setAttribute('src', prophet.imageurl);
    card.appendChild(image);

    let birth = document.createElement('p');
    birth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    card.appendChild(birth);

    let place = document.createElement('p');
    place.innerHTML = `Place of Birth: ${prophet.birthplace}`;
    card.appendChild(place);

    let death = document.createElement('p');
    death.innerHTML = `Date of Death: ${prophet.death}`;
    card.appendChild(death);

    
    cards.appendChild(card);
    
    document.querySelector('div.cards').appendChild(card);
   });
   
  });
