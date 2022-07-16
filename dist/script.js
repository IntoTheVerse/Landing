function Validation(){
         		var msg="";
         		//For First name
         		if($.trim($('#email').val())==""){
         			msg=msg+"Please enter your email address.\n";
         		}
         		if(msg!=""){
         			alert(msg);
         			return false;
         		}
         		return true;
    }


$(document).ready(function(){
  // Specify the deadline date
  const deadlineDate = new Date('July 17, 2022 23:59:59').getTime();

  // Cache all countdown boxes into consts
  const countdownDays = document.querySelector('.countdown__days .number');
  const countdownHours = document.querySelector('.countdown__hours .number');
  const countdownMinutes = document.querySelector('.countdown__minutes .number');
  const countdownSeconds = document.querySelector('.countdown__seconds .number');

  // Update the count down every 1 second (1000 milliseconds)
  setInterval(() => {
    // Get current date and time
    const currentDate = new Date().getTime();

    // Calculate the distance between current date and time and the deadline date and time
    const distance = deadlineDate - currentDate;

    // Calculations the data for remaining days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    const seconds = Math.floor(distance % (1000 * 60) / 1000);

    // Insert the result data into individual countdown boxes
    countdownDays.innerHTML = days;
    countdownHours.innerHTML = hours;
    countdownMinutes.innerHTML = minutes;
    countdownSeconds.innerHTML = seconds;
  }, 1000);
});