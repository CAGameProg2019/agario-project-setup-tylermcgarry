class Player extends Food {
    
    constructor(x, y, radius, color, name) {
		super(x, y, radius, color);
	
    }
}
Object.assign(Player, Food);