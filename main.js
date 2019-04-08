let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth -10;
canvas.height = innerHeight -10;

let foodNum = 100;
let player;
let foods = [];
let mpos;

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
let colorsWilderness = [
	'#C1D1F2',
	'#5175A5', 
	'#6F721E',
	'#A57C4A',
	'#A54A29'
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
function colorWilderness () {
	let index = Math.floor(Math.random()*colorsWilderness.length)
	return colorsWilderness[index];
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
	
	mpos = new Vector(canvas.width/2, canvas.height/2);
	
	player = new Player(canvas.width/2, canvas.height/2, 40, colorWilderness());
	
	
	for (var i = 0; i < foodNum; i++) {
		let radius = 15
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;
		let food = new Food(x, y, radius, colorCore());
		foods.push(food);
	}
	update();
}

function update() {
	
	c.clearRect(0, 0, canvas.width, canvas.height);
	
	
	for (var i = 0; i < foods.length; i++){
		foods[i].draw(c);
	}
	
	player.draw(c);
	
	

	requestAnimationFrame(update);
}





window.addEventListener('load', function() {
	init();
	
	window.addEventListener('mousemove', function(event) {
		mpos.x = event.clientX - canvas.offsetLeft;
		mpos.y = event.clientY - canvas.offsetTop;
		console.log(mpos.toString());
	});
	
});

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});