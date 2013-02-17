var enemy = function()
{
	this.w = 40;
	this.h = 30;

	this.x = canvas.width + this.w*5;
	this.y = (Math.random() * canvas.height) * .9;
	this.vx = 3;
	this.ax = 0.05;

	//create shadow
	this.shadow = new shadow(this,"-triangle",0,700);

	//bullet handlers
	this.bulletArray = [];
	this.canFire = true;
	// this.canFire = false;
	this.reloadBulletTime = 3000;
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
		this.remove(array,index);
	}	

	//fire bullet
	if(ourUtils.isOnScreen(this.x,this.y))
	{
		if (this.canFire) {
			this.fire(array,index);
		}
	}	

	//move bullets
	for(var i=0;i<this.bulletArray.length; i++)
	{
		this.bulletArray[i].move(this.bulletArray,i);
	}

};

enemy.prototype.fire = function(array,index)
{
	//create a bullet
	this.bulletArray.push(new enemyBullet(this));
	//disable firing mechanism
	this.canFire = false;
	//set timer to reload after 
	setTimeout(function() {array[index].reloadBullet()}, this.reloadBulletTime);
};

enemy.prototype.reloadBullet = function()
{
	this.canFire = true;
};

enemy.prototype.remove = function(array,index)
{
	array.splice(index, 1);
};