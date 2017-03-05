
let timer;
let degMin = 0,
    degHr = 0,
    degSec = 0;


function startClock(){
	timer = window.setInterval(moveHands, 800);
}

function moveHands(){
	$('#min').css('transform', 'rotate('+degMin+'deg)');
    degMin += 90;

    $('#hour').css('transform', 'rotate('+degHr+'deg)');
    degHr += 45;

    $('#sec').css('transform', 'rotate('+degSec+'deg)');
    degSec += 30;
    
}



window.addEventListener('load', startClock);