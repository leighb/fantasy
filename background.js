var background = function(first,bg1x,bg1w)
{
	//location and size
	this.w = 1280;
	this.h = 720;

	this.x = first ? 0 : bg1x+bg1w;
	//console.log(this.x)
	this.y = 0;

	//other
	this.speed = 1;

	//set up image
	this.img = new Image();
	this.img.ext = ".jpg"
	this.img.src = 'bg'+ (Math.floor(Math.random()*3)) + this.img.ext;

	//console.log('creating bg @ '+this.x);
}

background.prototype.draw = function(ctx)
{
	//set global alpha lower to create 'trails'
	ctx.globalAlpha = 0.6;
	ctx.drawImage(this.img,this.x,this.y, this.w, this.h);
	//return global alpha to default
	ctx.globalAlpha = 1.0;
};

background.prototype.move = function(starSpeedQuotient)
{
	var newSpeed = ourUtils.newRange(-10,10,10,20,-starSpeedQuotient);

	this.x -= this.speed*newSpeed;

};