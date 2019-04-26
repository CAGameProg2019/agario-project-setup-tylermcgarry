class Food extends Vector {
    
    constructor(x, y, radius, color, dx, dy) {
		super(x, y);
		this.radius = radius;
		this.color = color;
		this.dx = dx;
		this.dy = dy;
    }
	

	
	draw(c) {
		c.fillStyle = this.color;
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		c.closePath();
		c.fill();
	
		

		if (this.x + this.radius > canvas.width) {
		  this.dx = -this.dx;
		}
		if (this.x - this.radius <= 0) {
		  this.dx = -this.dx;
		}
		if (this.y + this.radius >= canvas.height) {
		  this.dy = -this.dy;
		}
		if (this.y - this.radius <= 0) {  
		  this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

	}
	
	intersects(food) {
		let distance = this.dist(food);
		if (distance <= this.radius + food.radius) {
			return true;
		}
		return false;
	}
	
	
	// Growing Player Size
	get mass() {
		return Math.PI * this.radius * this.radius;
	}
	
	set mass(newmass) {
		this.radius = Math.sqrt(newmass/Math.PI);
	}
	
	addMass (m) {
		this.mass += m;
		
	}
	
}
Object.assign(Food, Vector);


