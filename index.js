var slideIndex =1 ;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);


}
function currentSlide(n) {
    showSlides(slideIndex = n );


}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1
    }
    if ( n < 1 ){
        slideIndex = slides.length
    }

    for ( i=0 ; i < slides.length ; i++){
        slides[i].style.display = "none"
    }
    slides[slideIndex-1].style.display = "flex";
}



let weather = [
  {
  date: 1563465600000,
      day: '18.07.2019',
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
  date:  1563552000000 ,
     day: '19.07.2019',
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
  date:1563638400000  ,
     day: '20.07.2019',
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
  date:1563724800000  ,
         day: '21.07.2019',
  temperature:
  {
    night: 13,
    day: 22,
  },
  cloudiness: 'Sunny intervals ',
  snow: false,
  rain: false,

},
      {
  date:1563724800000   ,
           day: '22.07.2019',
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
  date:1563811200000    ,
           day: '23.07.2019',
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
    if (n == weather[i].date) {
        document.querySelector('#day').innerHTML = weather[i].day;
        document.querySelector('#out').innerHTML = "<h3>Day : " + weather[i].temperature.day + ' C °</h3>';
        document.querySelector('#night-temp').innerHTML = "night : " + weather[i].temperature.night + ' C °';
        document.querySelector('#cloud').innerHTML = weather[i].cloudiness;

        let currentDate = weather[i].date;
        let nextDay = currentDate;

        for (k = 1; k < 3; k++) {
            nextDay += 24 * 60 * 60 * 1000;
            if (weather[i + k] !== undefined && weather[i + k].date == nextDay) {
                console.log('yes');

                document.querySelector('#day1').innerHTML = weather[i + 1].day;
                document.querySelector('#out1').innerHTML = "<h3>Day : " + weather[i + 1].temperature.day + ' C °</h3>';
                document.querySelector('#night-temp1').innerHTML = "night : " + weather[i + 1].temperature.night + ' C °';
                document.querySelector('#cloud1').innerHTML = weather[i + 1].cloudiness;

                document.querySelector('#day2').innerHTML = weather[i + 2].day;
                document.querySelector('#out2').innerHTML = "<h3>Day : " + weather[i + 2].temperature.day + ' C °</h3>';
                document.querySelector('#night-temp2').innerHTML = "night : " + weather[i + 2].temperature.night + ' C °';
                document.querySelector('#cloud2').innerHTML = weather[i + 2].cloudiness;

                document.querySelector('#day4').innerHTML = weather[i + 3].day;
                document.querySelector('#out4').innerHTML = "<h3>Day : " + weather[i + 3].temperature.day + ' C °</h3>';
                document.querySelector('#night-temp4').innerHTML = "night : " + weather[i + 3].temperature.night + ' C °';
                document.querySelector('#cloud4').innerHTML = weather[i + 3].cloudiness;

                document.querySelector('#day5').innerHTML = weather[i + 4].day;
                document.querySelector('#out5').innerHTML = "<h3>Day : " + weather[i + 4].temperature.day + ' C °</h3>';
                document.querySelector('#night-temp5').innerHTML = "night : " + weather[i + 4].temperature.night + ' C °';
                document.querySelector('#cloud5').innerHTML = weather[i + 4].cloudiness;

                document.querySelector('#day6').innerHTML = weather[i + 5].day;
                document.querySelector('#out6').innerHTML = "<h3>Day : " + weather[i + 5].temperature.day + ' C °</h3>';
                document.querySelector('#night-temp6').innerHTML = "night : " + weather[i + 5].temperature.night + ' C °';
                document.querySelector('#cloud6').innerHTML = weather[i + 5].cloudiness;


            } else {
                break;
            }
        }
        break;
    }
}
