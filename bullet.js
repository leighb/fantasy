var bullet = function()
{
	this.vx = 10;
	this.vy = 20;
	this.x = ourShip.x;
	this.y = ourShip.y+10;
	this.h = 3;
	this.w = 15;

	this.drop = 0;

	//bullet timer (before bullet death)
	this.timer = 45;
	//create shadow
  this.shadow = new shadow(this,"square",0, canvas.height);
};

bullet.prototype.draw = function(ctx)
{
	//draw shadow
  this.shadow.draw(ctx);

	ctx.fillStyle = "white";
	ctx.fillRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);
};

bullet.prototype.move = function(array,num)
{
	//move shadow
	this.shadow.move();

	//move bullet
	this.x += this.vx;
	this.vx *= 1.05;

	//bullet start animation
	if (this.drop < 5)
	{
		this.y += this.vy;
		this.vy *= 0.5;
	}
	else
	{
		this.y -= this.vy;
	}

	this.drop += 1;	

	//remove bullet
	this.timer -=1;
	if(this.timer<0)
		array.splice(num, 1);
};