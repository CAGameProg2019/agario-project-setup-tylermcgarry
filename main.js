let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

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


let foodNum = 200;
let foods = [];


function init() {
	foods = [];
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
	requestAnimationFrame(update);
	c.clearRect(0, 0, canvas.width, canvas.height);
	
	for (var i = 0; i < foods.length; i++)
	foods[i].draw(c);
	

	
}





window.addEventListener('load', function(event) {
	init();
	
});
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});