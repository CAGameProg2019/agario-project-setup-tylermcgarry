let canvas = document.getElementById('main');
let c = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

let colors = [
  	'#ED553B', 
	'#F2B134', 
	'#47AB6C', 
	'#0894A1', 
	'#112F41'	
];
let foodNum = 100;
function randomColor () {
	let index = Math.floor(Math.random()*colors.length)
	return colors[index];
}

//let pos = new Vector(60, 60); // Starting Location
//let vel = new Vector(1, 1); // Velocity
//vel.scale(2);



let foods = [];


function init() {
	foods = [];
		for (var i = 0; i < foodNum; i++) {
			let radius = 10
		let x = Math.random() * canvas.width;
		let y = Math.random() * canvas.height;

		let food = new Food(x, y, radius, randomColor())
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