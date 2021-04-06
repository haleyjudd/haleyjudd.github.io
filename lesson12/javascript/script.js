//small view menu hide button

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//Font
WebFont.load({
    google: {
      families: [
         'Dosis', 'Stardos Stencil'
      ]
    }
  });


//Home Current Weather

const apiURL = "//api.openweathermap.org/data/2.5/onecall?lat=44.6995&lon=73.4529&appid=2453bb8c49b507f6bde5fe17c37e574e&units=imperial";

//const apiURL = "//api.openweathermap.org/data/2.5/onecall?q=plattsburgh&appid=2453bb8c49b507f6bde5fe17c37e574e&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    
    document.getElementById("temp").textContent = weatherInfo.current.temp;
    document.getElementById('humid').textContent = weatherInfo.current.humidity;
    document.getElementById('descript').textContent = weatherInfo.current.weather[0].description;
    
  });

//Home 3 day forecast

const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const forecastURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=2453bb8c49b507f6bde5fe17c37e574e&units=imperial";

fetch(forecastURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < todayDayNumber +5; i++) {
      let time = mylist[i].dt_txt;
      if (time.includes("21:00:00")) {

        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }

        let theDayName = document.createElement("h5");
        theDayName.textContent = weekday[forecastDayNumber];

        let theTemp = document.createElement("div");
        theTemp.innerHTML = `${weatherInfo.list[i].main.temp}&#176;F`;

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src = iconPath;
        theIcon.alt = `Icon image of ${weatherInfo.list[i].weather[0].description}`;

        let theDay = document.createElement("div");

        theDay.append(theDayName);
        theDay.append(theIcon);
        theDay.append(theTemp);

        document.getElementById("daysForecast").append(theDay);

      }
    }
  });

  
/*  const forecastURL = "//api.openweathermap.org/data/2.5/onecall?lat=44.6995&lon=73.4529&appid=2453bb8c49b507f6bde5fe17c37e574e&units=imperial";

  fetch(forecastURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      console.log(weatherInfo);
  
      let mylist = weatherInfo;
      let forecastDayNumber = todayDayNumber;

      for (i = todayDayNumber +1; i < todayDayNumber +4; i++) {
       let time = mylist.daily[i].dt;
        console.log(time);
        console.log(i);
        if (time.includes("21:00:00")) {
          
        
          forecastDayNumber += 1;
          if (forecastDayNumber === 7) {
            forecastDayNumber = 0;
          }
  
          let theDayName = document.createElement("h5");
          theDayName.textContent = weekday[forecastDayNumber];
  
          let theTemp = document.createElement("div");
          theTemp.innerHTML = `${mylist[i].daily[0].temp.day}&#176;F`;
  
          let iconcode = mylist[i].daily[0].weather[0].icon;
          let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
          let theIcon = document.createElement("img");
          theIcon.src = iconPath;
          theIcon.alt = `Icon image of ${mylist[i].daily[0].weather[0].description}`;
  
          let theDay = document.createElement("div");
  
          theDay.append(theDayName);
          theDay.append(theIcon);
          theDay.append(theTemp);
  
          document.getElementById("daysForecast").append(theDay);
  
        }
      }
    });
*/
  //Directory-Businesses

  const requestURL = 'javascript/json.json';

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   console.table(jsonObject);  // temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];

  const cards = document.querySelector('.cards');

   towns.forEach(business => {
    let card = document.createElement('div');
 
    let image = document.createElement('img');
    image.setAttribute('src', business.imgurl);
    card.appendChild(image);

    let h2 = document.createElement('h2');
    h2.innerHTML = `${business.name}`;
    card.appendChild(h2);

    let address = document.createElement('p');
    address.innerHTML = `Address: ${business.address}`;
    card.appendChild(address);

    let phone = document.createElement('p');
    phone.innerHTML = `Phone Number: ${business.phone}`;
    card.appendChild(phone);

    let website = document.createElement('p');
    website.innerHTML = `Website: ${business.website}`;
    card.appendChild(website);

    
    cards.appendChild(card);
    
    document.querySelector('div.cards').appendChild(card);
   });
   
  });
  
    