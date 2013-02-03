var star = function(randomizeX)
{
	//this.x = Math.random()*canvas.width;
	//this.y = randomizeY ? Math.random()*canvas.height : 0;
	this.x = randomizeX ? Math.random()*canvas.width : canvas.width;
	this.y = Math.random()*canvas.height;
	this.opacity = Math.random();
	this.size = Math.random() + 0.05;
	this.speed = 3 + Math.random() * 2;
};

star.prototype.draw = function(ctx)
{
	ctx.fillStyle = "rgba(255,255,255,"+this.opacity+")";
	ctx.fillRect(this.x, this.y, this.size*4, this.size*4);
};

star.prototype.move = function(newSpeed)
{
	//calculate star speed
	this.x -= this.speed * newSpeed; 
	// regenerate lost stars
	if(this.x < 0) {
		return true;
	}	
};