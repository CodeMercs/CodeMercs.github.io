	/* Set the date we're counting down to */
	var countDownDate = new Date('Dec 15, 2030 09:00:00').getTime();
	var countDownDateTXT = '';
	function mytime() {
		countDownDateTxt = document.getElementById('txt').value;
		countDownDate = new Date(countDownDateTxt).getTime();
		document.getElementById('now-time').innerHTML = countDownDateTxt;
	}

/* Update the count down every 1 second */

var x = setInterval(function() {
	/* Get todays date and time */
	var now = new Date().getTime();

	/* Find the distance between now and the count down date */
	var distance = countDownDate - now;

	/* Time calculations for days, hours, minutes and seconds */
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	/* Display the result in the element with id="demo" */
	document.getElementById('timer').innerHTML =
	days + 'D ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

	/* If the count down is finished, write some text */
	if (distance < 0) {
		clearInterval(x);
		document.getElementById('timer').innerHTML = 'EXPIRED';
	}
}, 1000);

