var themes = [
	{
		name: "sakura-vader",
		href: "sakura-vader.css",
	},
	{
		name: "sakura-earthly",
		href: "sakura-earthly.css",
	}
];
var parent_v = document.getElementById("parent-v");
var parent_g = document.getElementById("parent-g");
var current = 0;
var sakura = document.getElementById("sakura-css");
var tem_key = '';
function switchSakuraTheme() {
	tem_key = (current + 1)% themes.length;
	sakura.href = 'css/' + themes[tem_key].href;
	if (themes[tem_key].name == themes[0].name) {
		parent_v.style.display = "block";parent_g.style.display = "none";
	} else if (themes[tem_key].name == themes[1].name) {
		parent_v.style.display = "none";parent_g.style.display = "block";
	} 
	current += 1
}
$(window).scroll(function() {
	var $window = $(window).scrollTop();
	if ($window > 300) {
		$('button.totop').fadeIn(300);
	} else {
		$('button.totop').fadeOut(300);
	}			
})
$(function() {
	//To top effect
	$('button.totop').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	})
})
