
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=2453bb8c49b507f6bde5fe17c37e574e&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    console.log(weatherinfo);
    const temperature = document.querySelector('#current-temp');
    temperature.textContent = weatherinfo.main.temp;
    //console.log(weatherinfo.name);

    const imagesrc = `https://openweathermap.org/img/w/${weatherinfo.weather[0].icon}.png`;  // note the concatenation
const desc = weatherinfo.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

const mydate = new Date();
const y = mydate.getDay();
//console.log(y);

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

//console.log(myweekday[3]);

const d = new Date();
const todayDayNumber = d.getDay();

let forecastDayNumber = todayDayNumber;
console.log(forecastDayNumber);

for (i = 0; i<MediaQueryList.length; i++) {
  var time = mylist[i].dt.txt;
  if (time.includes('21:00:00')) {
    let theDayName = document.createElement("span");
    theDayName.textContent = weekday[forecastDayNumber];
    console.log(">"+weekday[forecastDayNumber]);

  }
    forecastDayNumber += 1;
    if (forecastDayNumber ===7) {

  }
}
  });

  //blazzard
  /*let cityID = 5604473;
  let appid = '2453bb8c49b507f6bde5fe17c37e574e';
  const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&appid=${appid}&units=imperial"; 
  console.log(apiURL)

  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    //reduce list array to the five forecast...40
    //filter jsObject.list story in new array
    //feed the filt a conditon 18:00:00...includes
    //loop

    let d = new Date(jsObject.list[4].dt_txt);

    document.getElementById(`dayofweek${day+}`).textContent = dayofWeek[d.getDay()];
    document.getElementById(`forecast${day+1}`).textContent = jsObject.list[4].main.temp;

  });
  */