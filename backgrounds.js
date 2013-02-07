var backgrounds = function(starSpeedQuotient)
{
	//number of backgrounds
	numOfBackgrounds = 3;
	//BG image array
	this.BGArray = [];
	this.nextIndex = 1;

	this.bg1 = new background(true);
	this.bg2 = new background(false,0,1280);
};

backgrounds.prototype.draw = function(ctx)
{
	this.bg1.draw(ctx);
	this.bg2.draw(ctx);
};

backgrounds.prototype.move = function()
{
	this.bg1.move(starSpeedQuotient);
	this.bg2.move(starSpeedQuotient);

	if(this.bg1.x <= -this.bg1.w) {
		//console.log('switching BGs @ '+this.bg1.x);
		this.bg1 = this.bg2;
		this.bg2 = new background(false,this.bg1.x,this.bg1.w);
	}

};