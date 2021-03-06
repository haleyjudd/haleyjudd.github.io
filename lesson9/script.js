const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
  
   const towns = jsonObject['towns'];
    
   //7 objects in towns
   console.log(towns);
   const cards = document.querySelector('.cards');

   const townsfilter = towns.filter(x => x.name == "Preston" || x.name == "Soda Springs" || x.name == "Fish Haven");
   console.log(townsfilter);

    townsfilter.forEach(town => {
     let card = document.createElement('section');
     let infobox = document.createElement('div'); 
     let fig = document.createElement('figure'); 
   const name = document.querySelector(".name");
       
    //Required information
    
    let h2 = document.createElement('h2');
    h2.innerHTML = `${town.name}`;
    infobox.appendChild(h2);
    

    let motto = document.createElement('h3');
    motto.innerHTML = `Motto: ${town.motto}`;
    infobox.appendChild(motto);

    let founded = document.createElement('p');
    founded.innerHTML = `Year Founded: ${town.yearFounded}`;
    infobox.appendChild(founded);
    
    let population = document.createElement('p');
    population.innerHTML = `Current Population: ${town.currentPopulation}`;
    infobox.appendChild(population);

    let rainfall = document.createElement('p');
    rainfall.innerHTML = `Average Rainfall: ${town.averageRainfall}`;
    infobox.appendChild(rainfall);

    let image = document.createElement('img');
    image.setAttribute('src', town.photo);
    fig.appendChild(image);

    card.appendChild(fig);
    card.appendChild(infobox);
    cards.appendChild(card);

    
    document.querySelector('div.cards').appendChild(card);
    
        });
    });