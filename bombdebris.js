var bombDebris = function(x,y)
{
	this.x = x;
	this.y = y;
	this.opacity = 1;
	this.debrisCount = 10;

	this.debrisArray = [];

	for(var i = 0; i < this.debrisCount; i++) 
	{
		this.debrisArray.push(new debris(this.x,this.y));
	}	
}

bombDebris.prototype.draw = function(ctx)
{
	for(var i=0;i<this.debrisArray.length; i++)
	{
		var d = this.debrisArray[i];

		d.draw(ctx);
		d.move();		
	}
};

bombDebris.prototype.move = function(first_argument) {
	// body...
};




var debris = function(x,y)
{
	this.x = x;
	this.y = y;
	this.vx = Math.random() * (10 - -10) - 10;
	this.vy = Math.random() * (10 - -10) - 10;
}

debris.prototype.draw = function(ctx) {
	ctx.fillStyle = "red";
	ctx.fillRect(this.x, this.y, 20, 20);
};

debris.prototype.move = function() {
	this.x += this.vx;
	this.y += this.vy;
};