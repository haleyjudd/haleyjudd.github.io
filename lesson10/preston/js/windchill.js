//Friday message

const today = new Date();
//console.log(today);

const dayNumber = today.getDay();
//console.log (dayNumber);

const element = document.getElementById("message");

if (dayNumber == 5) {
    element.classList.add("showme");
}
else {
    element.classList.add("hideme");
}


//Font
WebFont.load({
  google: {
    families: [
       'Sigmar One', 'Love Ya Like A Sister'
    ]
  }
});

//fetch() weather
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=2453bb8c49b507f6bde5fe17c37e574e&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    document.getElementById("temp").textContent = weatherInfo.main.temp;
    document.getElementById("high").textContent = weatherInfo.main.temp_max;
    document.getElementById('low').textContent = weatherInfo.main.temp_min;
    document.getElementById('speed').textContent = weatherInfo.wind.speed;
    document.getElementById('humid').textContent = weatherInfo.main.humidity;
    

    let high = parseFloat(document.getElementById('high').innerHTML);
    let windspeed = parseFloat(document.getElementById('speed').innerHTML);

    let roundedWindspeed = Math.pow(windspeed, 0.16);
    let windchill = 35.74 + 0.6215 * high - 35.75 * roundedWindspeed + 0.4275 * high * roundedWindspeed;

    if (high <= 50 && windspeed > 3) {

      document.getElementById('chill').innerHTML = Math.round(windchill);
    } else {

      windchill = "N/A";
    }
  });

  
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
  
  const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=2453bb8c49b507f6bde5fe17c37e574e&units=imperial";
  fetch(forecastURL)
    .then((response) => response.json())
    .then((weatherInfo) => {
      console.log(weatherInfo);
  
      let mylist = weatherInfo.list;
      let forecastDayNumber = todayDayNumber;
  
      for (i = 0; i < mylist.length; i++) {
        let time = mylist[i].dt_txt;
        if (time.includes("18:00:00")) {
        
  
          forecastDayNumber += 1;
          if (forecastDayNumber === 7) {
            forecastDayNumber = 0;
          }
  
          let theDayName = document.createElement("h5");
          theDayName.textContent = weekday[forecastDayNumber];
  
          let theTemp = document.createElement("span");
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
