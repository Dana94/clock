
let timer;
let degMin = 180,
    degHr = 180,
    degSec = 0;

let time = new Date();




function startClock(){
	timer = window.setInterval(moveHands, 1000);
}

function moveHands(){
	// $('#min').css('transform', 'rotate('+degMin+'deg)');
 //    degMin += 90;

 //    $('#hour').css('transform', 'rotate('+degHr+'deg)');
 //    degHr += 45;
 	let sec = time.getSeconds();

    $('#sec').css('transform', 'rotate('+degSec+'deg)');
    degSec += 30;
    
}



window.addEventListener('load', startClock);