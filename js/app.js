
let timer;
let degMin = 180,
    degHr = 180,
    degSec = 180;


function startClock(){
	timer = window.setInterval(moveHands, 500);
}

function moveHands(){
	
	let time = new Date();

	let hr = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();

 	//console.log("hr: " + hr);

 	//getting hour number
 	degHr = 180 + 30 * (hr - 12);
 	//taking into account where the min hand is to position the hr hand
 	//hr hand moves .5 deg per min
 	degHr += min * .5;

    $('#hour').css('transform', 'rotate('+degHr+'deg)');

 	
 	//console.log("min: " + min);

 	degMin = 180 + 30 * (min/5);

 	$('#min').css('transform', 'rotate('+degMin+'deg)');

 	
 	//console.log("sec: " + sec);

 	degSec = 180 + 6 * sec;

    $('#sec').css('transform', 'rotate('+degSec+'deg)');
}

window.addEventListener('load', startClock);