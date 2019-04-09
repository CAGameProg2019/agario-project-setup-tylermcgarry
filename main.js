let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

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

// Global Varables
let foodNum = 100;
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

// Random Color Functions
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




//Choose Color Array
//let colorType = prompt('Enter a Number 1-3');
//if (colorType == 1) {
//	arrType = colorCore;111
//} if (colorType == 2) {
//	arrType = colorArct;33
//} else {
//	arrType = colorSummer;
//}



function init() {
	
	let radius = 30;
	mpos = new Vector(canvas.width/2, canvas.height/2);
	player = new Player(undefined, undefined, radius, colorCore());
	
	for (var i = 0; i < foodNum; i++) { 
		let radius = 10;
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;
		let food = new Food(x, y, radius, colorCoast());
		foods.push(food);	
	}
	
	update();
}

function update() {
	
	c.clearRect(0, 0, canvas.width, canvas.height);
	requestAnimationFrame(update);
	
	
	for (var i = 0; i < foods.length; i++){
		foods[i].draw(c);
	}
	
	
	player.x = mpos.x;
	player.y = mpos.y;
	player.draw(c);
	
	
}



function getDistance (x1, x2, y1, y2) {
	let xDistance = x2 - x1;
	let yDistance = y2 - y1;
	
	return Math.sqrt (Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}


