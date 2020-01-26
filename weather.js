const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=14583dc926375985c30e1b4f2c7f4d23'

async function getData() {
   const response = await fetch(url);
   const data = await response.json();

   let weather = data.weather[0].main.toLowerCase(); // lower case weather description
   let id = data.weather[0].id;
   let temp = data.main.temp; 
   temp = Math.round(temp); // No decimal, Integer

   if (id >= 700 && id < 800){
      weather = 'atmosphere';
   }

   document.querySelector('.temp').textContent = temp + '°C';
   document.querySelector('.weather-icon').src = 'svg/' + weather + '.svg';
   document.querySelector('.bg').style.backgroundImage = 'url(img/' + weather + '.jpg)';

   const getHours = new Date();
   let hours = getHours.getHours();

   if (weather === 'clear' && (hours >= 20 || hours < 6) ){
      document.querySelector('.bg').style.backgroundImage = 'url(img/' + 'night' + '.jpg)';
   } else if (weather === 'clear' &&  hours < 11 ){
      document.querySelector('.bg').style.backgroundImage = 'url(img/' + 'morning' + '.jpg)';
   }  else if (weather === 'clear' && hours >= 17){
      document.querySelector('.bg').style.backgroundImage = 'url(img/' + 'evening' + '.jpg)';
   }
};

window.onload = getData();

setInterval(getData, 1000);


// /*---------- TEST WITH NO API ----------*/
// let weather = 'clear'
// let temp = 1

// document.querySelector('.temp').textContent = temp + '°C';
// document.querySelector('.weather-icon').src = 'svg/' + weather + '.svg';
// document.querySelector('.bg').style.backgroundImage = 'url(img/' + weather + '.jpg)';

// const getHours = new Date();
// let hours = getHours.getHours();

// hours = 12

// if (weather === 'clear' && hours >= 20 || hours < 6 ){
//    document.querySelector('.bg').style.backgroundImage = 'url(img/' + 'night' + '.jpg)';
// } else if (hours < 9 ){
//    document.querySelector('.bg').style.backgroundImage = 'url(img/' + 'morning' + '.jpg)';
// }  else if (hours >= 17){
//    document.querySelector('.bg').style.backgroundImage = 'url(img/' + 'evening' + '.jpg)';
// }






