let weather = [
  {
  date: 1562083200000,
  temperature:
  {
    night: 16,
    day: 24,
  },
  cloudiness: 'Sunny',
  snow: false ,
  rain: false,
},
{
  date:  1562169600000 ,
  temperature:
  {
    night: 15,
    day:26 ,
  },
  cloudiness:'Sunny' ,
  snow: false,
  rain: false,

},
{
  date:1562256000000  ,
  temperature:
  {
    night: 13,
    day: 25,
  },
  cloudiness: 'Sunny',
  snow: false,
  rain: false,

},
    {
  date:1562342400000  ,
  temperature:
  {
    night: 13,
    day: 22,
  },
  cloudiness: 'Sunny intervals and light wind',
  snow: false,
  rain: false,

},
      {
  date:1562428800000  ,
  temperature:
  {
    night: 16,
    day: 27,
  },
  cloudiness: 'Cloudy',
  snow: false,
  rain: false,

},
      {
  date:1562515200000  ,
  temperature:
  {
    night: 11,
    day: 21,
  },
  cloudiness: 'Sunny ',
  snow: false,
  rain: false,

},
];

let d = new Date();
d.setHours(20,0,0,0)
let n =d.getTime();
console.log(n);
for (let i = 0; i < weather.length; i++) {
  if ( n == weather[i].date) {
    document.querySelector('#out').innerHTML="<h3>Day : " + weather[i].temperature.day + ' C °</h3>';
    document.querySelector('#night-temp').innerHTML="night : " + weather[i].temperature.night + ' C °';
    document.querySelector('#cloud').innerHTML=weather[i].cloudiness;

    let currentDate = weather[i].date;
    let nextDay = currentDate;

    for ( k = 1; k < 3; k++) {
      nextDay += 24 * 60 * 60 * 1000;
      if (weather[i + k] !== undefined && weather[i + k].date == nextDay) {
         console.log('yes');


         document.querySelector('#out1').innerHTML= "<h3>Day : " + weather[i + 1].temperature.day + ' C °</h3>';
         document.querySelector('#night-temp1').innerHTML="night : " + weather[i + 1].temperature.night + ' C °';
         document.querySelector('#cloud1').innerHTML=weather[i + 1].cloudiness;

          document.querySelector('#out2').innerHTML="<h3>Day : " + weather[i + 2].temperature.day + ' C °</h3>';
         document.querySelector('#night-temp2').innerHTML="night : " + weather[i + 2].temperature.night + ' C °';
         document.querySelector('#cloud2').innerHTML=weather[i + 2].cloudiness;


          document.querySelector('#out3').innerHTML="<h3>Day : " + weather[i + 3].temperature.day + ' C °</h3>';
         document.querySelector('#night-temp3').innerHTML="night : " + weather[i + 3].temperature.night + ' C °';
         document.querySelector('#cloud3').innerHTML=weather[i + 3].cloudiness;


      }
      else {
        break;
      }
    }
    break;
  }
}
