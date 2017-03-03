
let timer;
let deg = 5;

function startClock(){
	timer = window.setInterval(moveMin, 800);
}

function moveMin(){
	$('#min').css('transform', 'rotate('+deg+'deg)');

	if(deg == 360){
		deg = 0;
	}
	else{
		deg += 5;
	}
}



window.addEventListener('load', startClock);