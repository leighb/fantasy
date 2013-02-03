var background = function(first,num)
{
	this.speed = 4;
	this.width = 1280;
	this.height = 720;
	this.x = first ? 0 : this.width;
	this.y = 0;
	this.img = new Image();
	this.img.ext = ".jpg"
	this.img.src = 'bg'+ num + this.img.ext;
}

background.prototype.draw = function(ctx)
{
	ctx.globalAlpha = 0.6;
	ctx.drawImage(this.img,this.x,this.y, this.width, this.height);
	ctx.globalAlpha = 1.0;
};

background.prototype.move = function(starSpeedQuotient)
{
	var oldRange = (8 - -8);  
	var newRange = (5 - 1);  
	var newSpeed = (((-starSpeedQuotient - -8) * newRange) / oldRange) + 1;
	this.x -= this.speed*newSpeed;
};