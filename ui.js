var ui = function(ourShip)
{
	this.healthBar = new healthBar();
};

ui.prototype.draw = function(ctx)
{
	this.healthBar.draw(ctx);
};

ui.prototype.move = function(first_argument)
{
	
};

var healthBar = function()
{
	this.x = 30;
	this.y = 30;
	this.w = 100;
	this.h = 20;
};

healthBar.prototype.draw = function(ctx)
{
	//draw fill
	ctx.fillStyle = "white";
	ctx.fillRect(this.x,this.y,ourShip.health,this.h);

	//draw border
	ctx.lineWidth = 1;
	ctx.strokeStyle = "white";
	ctx.strokeRect(this.x +.5,this.y+.5,this.w, this.h);


};

healthBar.prototype.move = function() {
	// body...
};