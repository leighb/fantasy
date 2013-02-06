var ordnance = function()
{
	this.bulletArray = [];
	this.canFire = true;
	this.reloadBulletTime = 300;

	this.bombArray = []
	this.canBomb = true;
	this.reloadBombTime = 800;
};

ordnance.prototype.draw = function(ctx)
{
	for(var i=0;i<this.bulletArray.length; i++)
	{
		this.bulletArray[i].draw(ctx);
	}

	for(var i=0;i<this.bombArray.length; i++)
	{
		this.bombArray[i].draw(ctx);		
	}
};

ordnance.prototype.move = function()
{
	//move bullets
	for(var i=0;i<this.bulletArray.length; i++)
	{
		this.bulletArray[i].move(this.bulletArray, i);
	}
	//move bombs
	for(var i=0;i<this.bombArray.length; i++)
	{
		this.bombArray[i].move(this.bombArray, i);
	}

	if (keyX)
	{
		if (this.canFire) {
			//add new bullet to array
			this.bulletArray.push(new bullet());
			//disable firing mechanism
			this.canFire = false;
			//set timer to reload after 
			setTimeout(function() {ourOrdnance.reloadBullet()}, this.reloadBulletTime);
		}
  }
  if (keyZ)
  {
  	if (this.canBomb) {
  		//add new bomb to array
  		this.bombArray.push(new bomb());
  		//disable firing mechanism
  		this.canBomb = false;
  		//set timer to reload after 
  		setTimeout(function() {ourOrdnance.reloadBomb()}, this.reloadBombTime);
  	}
  
  }
};

ordnance.prototype.reloadBullet = function()
{
	this.canFire = true;
};

ordnance.prototype.reloadBomb = function()
{
	this.canBomb = true;
};