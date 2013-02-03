var shadow = function()
{
	this.x = ourShip.x - 30;
	this.y = 700;
	this.maxWidth = 66;
	this.w = 0;
	this.h = 0;
	this.opacity = 1;

}

shadow.prototype.draw = function(ctx) {

	var shipRatio = ourShip.y/canvas.height;

	this.w = shipRatio*this.maxWidth;
	this.h = shipRatio*100*.05;
	this.opacity = shipRatio * .5;

	ctx.fillStyle ="rgba(0,0,0,"+this.opacity.toFixed(2)+")";

	ctx.beginPath();
	ctx.moveTo(this.x, this.y - this.h / 2);
	ctx.lineTo(this.x + this.w, this.y);
	ctx.lineTo(this.x, this.y + this.h /2);
	ctx.closePath();
	ctx.fill();
	
};

shadow.prototype.move = function(first_argument) {
	this.x = ourShip.x;
};