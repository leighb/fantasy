var ordnance = function()
{
	this.bombArray = []
	this.canBomb = true;

	this.bulletArray = [];
	this.canFire = true;

}

ordnance.prototype.draw = function(ctx)
{
	for(var i=0;i<this.bulletArray.length; i++)
	{
		var b = this.bulletArray[i];
  	b.x += b.vx;
  	b.vx *= 1.05;
  	if (b.drop < 5) {
  		b.y += b.vy;
  		b.vy *= 0.5;
  	} else {
  		b.y -= b.vy;
  	}
  	b.drop += 1;

  	ctx.fillStyle = "white";
		ctx.fillRect(b.x, b.y - 5, 5, 5);

		if(b.x > canvas.width - 5) {
			this.bulletArray.splice(i, 1);

		}
	}

	for(var i=0;i<this.bombArray.length; i++)
	{
		var b2 = this.bombArray[i];

		b2.draw(ctx);
		b2.move(this.bombArray, i);
		
	}
};

ordnance.prototype.move = function() {
	if (keyX)
	{
		if (this.canFire) {
			this.bulletArray.push(new bullet());
			this.canFire = false;
			setTimeout(function() {ourOrdnance.fire()}, 300);
		}
  }
  if (keyZ)
  {
  	if (this.canBomb) {
  		this.bombArray.push(new bomb());
  		this.canBomb = false;
  		setTimeout(function() {ourOrdnance.bomb()}, 800);
  	}
  
  }
};

ordnance.prototype.fire = function() {
	this.canFire = true;
};

ordnance.prototype.bomb = function() {
	this.canBomb = true;
};