class Vector {
    
    constructor(x, y) {
		this.x = x;
		this.y = y;
		this.rad = rad;
		
		
    }
	
	addVector(vec) {
		this.x += vec.x;
		this.y += vec.y;
		return this;
	}
	

	subVector(vec) { 
		this.x -= vec.x;
		this.y -= vec.y;
		return this;
	}
	
	sclVector(s) { 
		
		
//		this.x * s = vec.x
//		this.y * s = vec.y
		
	}
	
	toString() {
		return '<'+ this.x+', '+this.y+'>';
	}

}