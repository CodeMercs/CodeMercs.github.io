/* Creare's 'Implied Consent' EU Cookie Law Banner v:2.4 */
/* Conceived by Robert Kent, James Bavington & Tom Foyster */

/* false disables the Cookie, allowing you to style the banner */
var dropCookie = true;

/* Number of days before the cookie expires, and the banner reappears */
var cookieDuration = 14;

/* Name of our cookie */
var cookieName = 'complianceCookie';

/* Value of cookie */
var cookieValue = 'on';
 
function createDiv(){
	var bodytag = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	div.setAttribute('id','cookie-law');
	div.innerHTML = '<p>Our website uses cookies. By continuing we assume your permission to deploy cookies, as detailed in our <a href="#" rel="nofollow" title="Privacy &amp; Cookies Policy">privacy and cookies policy</a>. 	<a class="close-cookie-banner" href="javascript:void(0);" onclick="removeMe();"><span>X</span></a></p>';    
	// Be advised the Close Banner 'X' link requires jQuery
     
	// bodytag.appendChild(div); // Adds the Cookie Law Banner just before the closing </body> tag
	// or
	bodytag.insertBefore(div,bodytag.firstChild); // Adds the Cookie Law Banner just after the opening <body> tag
     
	document.getElementsByTagName('body')[0].className+=' cookiebanner'; //Adds a class tothe <body> tag when the banner is visible
     
	createCookie(window.cookieName,window.cookieValue, window.cookieDuration); // Create the cookie
}
 
 
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000)); 
		var expires = "; expires="+date.toGMTString(); 
	} else {
		var expires = ""
	};
	if(window.dropCookie) { 
		document.cookie = name+"="+value+expires+"; path=/"; 
	}
}
 
function checkCookie(name) {
	 var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
 
function eraseCookie(name) {
	createCookie(name,"",-1);
}
 
window.onload = function(){
	if(checkCookie(window.cookieName) != window.cookieValue){
		createDiv(); 
	}
}

function removeMe(){
	var element = document.getElementById('cookie-law');
	element.parentNode.removeChild(element);
}