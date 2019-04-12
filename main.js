let canvas = document.getElementById('main');
const c = canvas.getContext('2d');

canvas.width = innerWidth - 10;
canvas.height = innerHeight - 10

// Event Listiners
window.addEventListener('load', function() {
	init();
	
	window.addEventListener('mousemove', function(event) {
		mpos.x = event.clientX - canvas.offsetLeft;
		mpos.y = event.clientY - canvas.offsetTop;
		
	});
	
});
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

});



// Global Varables/Constants
const FOOD_COUNT = 150;
let player;
let foods = [];
let mpos;
let x;
let y;
let radius;



// Color Arrays
let colorsCore = [
  	'#ED553B', 
	'#F2B134', 
	'#47AB6C', 
	'#0894A1', 
	'#112F41'	
];
let colorsArct = [
	'#87A5BF',
	'#ADC4D8', 
	'#A5A056',
	'#8C814A',
	'#595231'
];
let colorsSummer = [
	'#029CAF',
	'#E4D499', 
	'#FFC118',
	'#EF7C18',
	'#E22450'
];
let colorsWild = [
	'#C1D1F2',
	'#5175A5', 
	'#6F721E',
	'#A57C4A',
	'#A54A29'
];
let colorsCoast = [
	'#A3D9BF',
	'#D6D9C5', 
	'#A3A649',
	'#A67F38',
	'#D9B791'
];

// Random Color Generators
function colorCore () {
	let index = Math.floor(Math.random()*colorsCore.length)
	return colorsCore[index];
}
function colorArct () {
	let index = Math.floor(Math.random()*colorsArct.length)
	return colorsArct[index];
}
function colorSummer () {
	let index = Math.floor(Math.random()*colorsSummer.length)
	return colorsSummer[index];
}
function colorWild () {
	let index = Math.floor(Math.random()*colorsWild.length)
	return colorsWild[index];
}
function colorCoast () {
	let index = Math.floor(Math.random()*colorsCoast.length)
	return colorsCoast[index];
}

	
function foodGen() {
	
	let radius = 10; // Food Radius
	let x = Math.random() * canvas.width;
	let y = Math.random() * canvas.height;
	let food = new Food(x, y, radius, colorCoast());
	foods.push(food);
}



function init() {
	
	radius = 30;
	
	mpos = new Vector(canvas.width/2, canvas.height/2);
	player = new Player(undefined, undefined, radius, colorCore());
	
	for (var i = 0; i < FOOD_COUNT; i++) { 
		foodGen();
	}
	
	update();
	
}

function update() {
	// Refresh 
	c.clearRect(0, 0, canvas.width, canvas.height);
	requestAnimationFrame(update);
	
	// Food/Player Interaction
	for (var i = 0; i < foods.length; i++){
	
	// Food/Player Contact/Growth
		let eaten = player.intersects(foods[i]);
		if (!eaten) {
				foods[i].draw(c);	
		} else {
			if (player.mass < 500000) {
				player.addMass(foods[i].mass);
			}
			foods.splice(i, 1);
			i--;
		}
	}
	// Food Regeneration
	while (foods.length < FOOD_COUNT) {
		foodGen();
	}
	
	// Mouse position to Player position
	player.x = mpos.x;
	player.y = mpos.y;
	player.draw(c);
	
	
	
	
}






