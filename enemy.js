var enemy = function()
{
	this.w = 30;
	this.h = 20;

	this.x = canvas.width + this.w*5;
	this.y = (Math.random() * canvas.height) * .9;
	this.vx = 3;
	this.ax = 0.3;

	//create shadow
	this.shadow = new shadow(this,"-triangle",0,700);

	this.bulletArray = [];

	this.canFire = false;
};

enemy.prototype.draw = function(ctx)
{
	//draw shadow
	this.shadow.draw(ctx);

	ctx.fillStyle = "white";

	ctx.beginPath();
  ctx.moveTo(this.x, this.y - this.h/2);
  ctx.lineTo(this.x - this.w, this.y);
  ctx.lineTo(this.x, this.y + this.h/2);
  ctx.closePath();
  ctx.fill();

	//draw bullets
	for(var i=0;i<this.bulletArray.length; i++)
	{
		this.bulletArray[i].draw(ctx);
	}
};

enemy.prototype.move = function(array,index)
{
	//move shadow
	this.shadow.move();
	// increase speed by acceleration
	this.vx += this.ax;
	//move enemy
	this.x -= this.vx;
	//handle removal
	
	if(this.x < -6000 ) {
		//remove from array
		array.splice(index, 1);
	}
	

	if(this.x - 15 < ourShip.x && this.x + 15 > ourShip.x) {
		this.fire();
	}

	//move bullets
	for(var i=0;i<this.bulletArray.length; i++)
	{
		this.bulletArray[i].move();
	}

};

enemy.prototype.fire = function() {
	this.bulletArray.push(new enemyBullet(this));
};