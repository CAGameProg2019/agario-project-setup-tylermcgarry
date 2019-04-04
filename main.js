let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let colors = [
  	'#324001', 
	'#667302', 
	'#F2B33D', 
	'#BF4124', 
	'#730202'	
];

function randomColor () {
	let index = Math.floor(Math.random()*colors.length)
	return colors[index];
}

let pos = new Vector(60, 60); // Starting Location
let vel = new Vector(1, 1); // Velocity
vel.scale(2);



let foods = [];


function init() {
	let x = Math.random() * canvas.width;
	let y = Math.random() * canvas.height;
	
	let food = new Food(x, y, 50, randomColor())
	foods.push(food)
	update();
}

function update() {
	
	c.clearRect(0, 0, canvas.width, canvas.height);
	
	
	foods[0].draw(c);
	
	
	requestAnimationFrame(update);
}





window.addEventListener('load', function(event) {
	init();
	
});
