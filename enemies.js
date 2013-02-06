var enemies = function()
{
	this.enemyArray = [];
};

enemies.prototype.draw = function(ctx)
{
	for(var i=0;i < this.enemyArray.length; i++)
	{
		this.enemyArray[i].draw(ctx);
	}
};

enemies.prototype.move = function()
{
	for(var i=0;i < this.enemyArray.length; i++)
	{
		this.enemyArray[i].move(this.enemyArray,i);
	}
};

enemies.prototype.generateEnemies = function()
{
	if (Math.floor(Math.random() * 45) == 5)
	{
		//console.log('create enemy');
		this.enemyArray.push(new enemy());
	}
};