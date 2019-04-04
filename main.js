let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;
let Vector
let xVel = 0.5;
let yVel = 0.2;
let xLoc = 60 // x location
let yLoc = 60 // y location
let rad = 50; // Circle radius
let pos = new Vector(xLoc, yLoc); // Starting Location
let vel = new Vector(xVel, yVel); // Velocity
//let s = 10;

function init() {
	
	console.log(pos.toString());
	update();
}

function update() {
	
	c.clearRect(0, 0, canvas.width, canvas.height);
	
	
	vel.scl(2)
	
	
	c.beginPath();
	c.arc(pos.x, pos.y, rad, 0, Math.PI*2, false);
	c.stroke();
	
	
	requestAnimationFrame(update);
}


window.addEventListener('load', function(event) {
	init();
});
