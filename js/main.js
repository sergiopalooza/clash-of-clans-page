/*
    main.js
    by @sergiopalooza and @ericachase
    This is a test commit
    Erica is a nerd
*/

/*----War countdown timer----*/
//Stat countup options  
  var options = {
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : '' 
  };
  var wars = new CountUp("warsWon", 0, 27, 0, 2.5, options);
  var members = new CountUp("members", 0, 39, 0, 2.5, options);
  var clanLevel = new CountUp("clanLevel", 0, 4, 0, 2.5, options);
  wars.start();
  members.start();
  clanLevel.start();

/*----War countdown timer----*/
var friday= '2038/01/01 18:00:00'; //Using 2038 because days/weeks line up perfectly with 2015
var tuesday= '2038/01/05 18:00:00'; //This works because we cut off the year to get a weekly timer

  $('#fridayCountdown').countdown(friday, function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span>%d</span> days '
    + '<span>%H</span> hr '
    + '<span>%M</span> min '
    + '<span>%S</span> sec'));
});

  $('#tuesdayCountdown').countdown(tuesday, function(event) {
  var $this = $(this).html(event.strftime(''
    + '<span>%d</span> days '
    + '<span>%H</span> hr '
    + '<span>%M</span> min '
    + '<span>%S</span> sec'));
});

//check date grabs the day of the week and hides the appropriate countdown
//This ensures that only one timer is shown each day
function checkDate() {
  var d = new Date().getDay();
  if (d === 0 || d === 1 || d === 5 || d === 6){ //if the date is Sunday, Monday, Friday or Saturday
    $('#fridayCountdown').hide(); //dont show the countdown for friday
  }
  else {
    $('#tuesdayCountdown').hide(); //else show the countdown for tuesday
  }
}
checkDate();


