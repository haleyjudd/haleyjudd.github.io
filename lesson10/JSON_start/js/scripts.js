//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=2453bb8c49b507f6bde5fe17c37e574e&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    console.log(weatherInfo.name);

    document.getElementById('place').innerHTML=weatherInfo.name;
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
     document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed;
     document.getElementById('townName').innerHTML=weatherInfo.name;
    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;

 }); //end of "then" fat arrow function

const mydate = new Date();
const y = mydate.getDay();
console.log(y);

const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

console.log(myweekday[6]);

const d = new Date();

const todayDayNumber = d.getDay();

let forecastDayNumber = todayDayNumber;

console.log(forecastDayNumber);

for (i= 0; i<mylist.length; i++) {
  var time = mylist[i].dt_txt;
  if (time.includes("21:00:00")) {

  }
}




