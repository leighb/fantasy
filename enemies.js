var enemies = function(create)
{
	this.create = create;
	this.enemyArray = [];

};

enemies.prototype.draw = function(ctx)
{	
	if (this.create) {
		for(var i=0;i < this.enemyArray.length; i++)
		{
			this.enemyArray[i].draw(ctx);
		}
	}
};

enemies.prototype.move = function()
{
	if (this.create) {
		for(var i=0;i < this.enemyArray.length; i++)
		{
			this.enemyArray[i].move(this.enemyArray,i);
		}
	}
};

enemies.prototype.generate = function()
{
	if (Math.floor(Math.random() * 90) == 5)
	{
		this.enemyArray.push(new enemy());
	}
};