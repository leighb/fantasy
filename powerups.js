var powerups = function(create)
{
	this.create = create;
	this.powerupArray = [];
};

powerups.prototype.draw = function(ctx)
{	
	if (this.create) {
		for(var i=0;i < this.powerupArray.length; i++)
		{
			this.powerupArray[i].draw(ctx);
		}
	}
};

powerups.prototype.move = function()
{
	if (this.create) {
		for(var i=0;i < this.powerupArray.length; i++)
		{
			this.powerupArray[i].move(this.powerupArray,i);
		}
	}
};

powerups.prototype.generate = function()
{
	if (Math.floor(Math.random() * 500) == 5)
	{
		this.powerupArray.push(new powerup());
	}
};