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




function colorCore () {
	let index = Math.floor(Math.random()*colors.length)
	return colors[index];
}
function colorArct () {
	let index = Math.floor(Math.random()*colors2.length)
	return colors2[index];
}



let foodNum = 200;
let foods = [];


function init() {
	foods = [];
		for (var i = 0; i < foodNum; i++) {
		let radius = 15
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;
		let food = new Food(x, y, radius, colorArct())
		foods.push(food)
		update();
	}
	
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