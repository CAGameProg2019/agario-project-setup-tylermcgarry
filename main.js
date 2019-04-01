let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let rad = 50;
let pos = new Vector(60, 60);
let vel = new Vector(.5, .2);


function init() {
	
	console.log(pos.toString());
	update();
}

function update() {
	
	c.clearRect(0, 0, canvas.width, canvas.height);
	
	pos.subVector(vel);
	
	c.beginPath();
	c.arc(pos.x, pos.y, rad, 0, Math.PI*2, false);
	c.stroke();
	
	
	requestAnimationFrame(update);
}


window.addEventListener('load', function(event) {
	init();
});
