var powerup = function()
{
	this.w = 20;
	this.h = 20;

	this.x = canvas.width + this.w*5;
	this.y = (Math.random() * canvas.height) * .9;
	this.vx = 6;

	//create shadow
	this.shadow = new shadow(this,"square",0,700);
};

powerup.prototype.draw = function(ctx)
{
	//draw shadow
	this.shadow.draw(ctx);

	ctx.fillStyle = "red";
	ctx.fillRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);
};

powerup.prototype.move = function(array,index)
{
	//move shadow
	this.shadow.move();
	//move powerup
	this.x -= this.vx;
	//handle removal
	if(this.x < -this.w ) {
		ourUtils.removeFromArray(array,index);
	}	
};