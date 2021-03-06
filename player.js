class Player extends Food {
    
    constructor(x, y, radius, color, stroke, name, maxSpeed) {
		super(x, y, radius, color);
		this.stroke = stroke;
		this.name = name;
		this.maxSpeed = maxSpeed;
	
		
    }
	
	
	update(mouse) {
		let vel = new  Vector(mouse.x, mouse.y);
		vel.subVector(this);
		let dist = vel.magnitude();
		
		if (dist > 0) {
			vel.toDirVEC();
			
			vel.scale(this.maxSpeed)
			if (dist < this.radius) {
				vel.scale(dist/this.radius);
			}
			
			this.addVector(vel);
		}
		
		
	}
	
	
	playDraw(c, name, score) {
		let fontSize
		c.lineWidth = this.radius*0.075;
		c.strokeStyle = this.stroke;
		c.fillStyle = this.color;
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
		c.closePath();
		c.fill();
		c.stroke();
		c.fillStyle = '#ffffff';
		c.textAlign = 'center';
		c.textBaseline = 'middle';
		c.lineWidth = 0.03*this.radius;
		fontSize = Math.round(this.radius*0.33)
		c.font = fontSize + 'px Monospace';
		c.strokeStyle = '#000000';
		c.strokeText(this.name, this.x, this.y);
		c.fillText(this.name, this.x, this.y, );
		
		
		
	}
}
Object.assign(Player, Food);