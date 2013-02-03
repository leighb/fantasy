var ordnance = function()
{
	this.bombArray = []
	this.canBomb = true;

	this.bulletArray = [];
	this.canFire = true;

}

bullets.prototype.draw = function(ctx) {
	//draw bullets
	for(var i=0;i<this.bulletArray.length; i++)
	{
		var b = this.bulletArray[i];
  	b.x += b.speed;

  	ctx.fillStyle = "white";
		ctx.fillRect(b.x, b.y - 5, 10, 10);

		if(b.x > canvas.width - 50) {
			this.bulletArray.splice(i, 1);

		}
	}

	//draw bombs
	for(var i=0;i<this.bombArray.length; i++)
	{

	}
};

bullets.prototype.move = function() {
	if (keyX)
	{
		if (this.canFire) {
			this.bulletArray.push(new bullet());
			this.canFire = false;
			setTimeout(function() {ourOrdnance.fire()}, 300);
		}
  }
  if (keyZ)
  
  }
};

bullets.prototype.fire = function(first_argument) {
	this.canFire = true;
};

bullets.prototype.bomb = function(first_argument) {
	this.canBomb = true;
};