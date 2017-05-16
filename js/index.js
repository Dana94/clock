let normal_clock = document.getElementById("normal-clock");

function load_normal_clock(){
	// window.load("normal_clock.html", function(){
	// 	console.log("works");
	// });
	$("body").load("normal_clock.html");
}



normal_clock.onclick = load_normal_clock;