//Friday message

const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log (dayNumber);

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

 //Wind chill
  const tempNumber = parseFloat(document.getElementById("temp").textContent);
  const speedNumber = parseFloat(document.getElementById("speed").textContent);
  let windchill=35.74+(0.6215*tempNumber)-(35.75*Math.pow(speedNumber,0.16))+(0.4275*tempNumber*Math.pow(speedNumber,0.16));
  windchill = Math.round(windchill);

  if(tempNumber<=50 && speedNumber > 3){
    document.getElementById("chill").textContent = "Wind Chill:"+windchill+"\xB0F";
  }
  else {
    document.getElementById("chill").textContent = "No wind chill today!";
  }