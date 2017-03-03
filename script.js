
// grab the elements

var dayName = document.querySelector('.dayName');
var dateNum = document.querySelector('#num');
var monthName = document.querySelector('.monthName');
var time = document.querySelector('.time');
var ampm = document.querySelector('.ampm');

var blink = ':';

function tick() {
  // date formats
  var today = new Date();
  var date = today.getDate();
  var month = today.getMonth();
  var day = today.getDay();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();
  var amPm = 'AM';

  if(hours > 12) {
    amPm = 'PM';
  } else {
    amPm = 'AM';
  }


  var dayNames = ['Sunday', 'Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  var monthNames = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER','NOVEMBER', 'DECEMBER'];

  // Print Day name
  var dayOut = dayNames[day];
  dayName.innerText = dayOut;

  // Print dateNum, monthName (30th, March)
/*
1st, 21st, 31st
2nd, 22nd,
3rd 23rd,

4th, 5th, 6th, 7th, 8th, 9th, 10th, 11th, 12th, 13th 14th
15th, 16th, 17th, 18th, 19th, 20th, 24th, 25th, 26th 27th
28th, 29th, 30th
*/

  if(date == 1 || date == 21 || date == 31) {
    date = date + 'st';
  }
  if (date == 2 || date == 22) {
  	date = date + 'nd';
  }
  if (date == 3 || date == 23) {
  	date = date + 'rd';
  }
  else {
  	date = date + 'th';
  }

  var dateOut = date;
  dateNum.innerText = dateOut;

  var monthOut = monthNames[month];
  monthName.innerText = monthOut;

  // time
  if(hours > 12) {
    hours = hours - 12;
  }
  if(seconds < 10) {
    seconds =  '0' + seconds;
  }
  if(minutes < 10) {
    minutes = '0' + minutes;
  }

  time.innerText = hours + blink + minutes + blink + seconds;
  ampm.innerText = amPm;



};
  setInterval(function () {
    tick();
  }, 1000);
tick();
