var bombDebris = function(x,y)
{
	this.x = x;
	this.y = y;
	this.opacity = 1;
	this.debrisCount = 100;
	this.ringCount = 70;

	this.debrisArray = [];
	this.ringArray = [];

	for(var i = 0; i < this.debrisCount; i++) 
	{
		this.debrisArray.push(new debris(this.x,this.y));
	}	

	for(var i = 0; i < this.ringCount; i++) 
	{
		this.ringArray.push(new ring(this.x,this.y));
	}
}

bombDebris.prototype.draw = function(ctx)
{
	ctx.globalCompositeOperation ="lighter";
	for(var i=0;i<this.debrisArray.length; i++)
	{
		var d = this.debrisArray[i];
		
		d.draw(ctx);
		d.move();
	}

	for(var i=0;i<this.ringArray.length; i++)
	{
		var r = this.ringArray[i];
		
		r.draw(ctx);
		r.move();
	}

	ctx.globalCompositeOperation = "source-over";
};

bombDebris.prototype.move = function(first_argument) {
	// body...
};


var debris = function(x,y)
{
	//position & size
	this.x = x;
	this.y = y;
	this.w = 10;
	this.h = 10;

	this.scale = 1;
	this.minScale = 0.1;

	//appearance
	this.opacity = .02;

	//speed
	this.min = -20;
	this.max = 20;

	this.ratio = .1;
	//this.vx = ourUtils.rand(-50,50);
	//this.vy = ourUtils.rand(-50,50);

	this.power = ourUtils.rand(this.min, this.max);

	this.angle = Math.random()*360;

	this.vx = Math.sin(this.angle)*this.power;
	this.vy = Math.cos(this.angle)*this.power;

	this.r = Math.round(255);
	this.g = Math.round(Math.random()*255);
	this.b = Math.round(Math.random()*255);

	this.switch = false;
};

debris.prototype.draw = function(ctx)
{
	//switch to death phase if debris gets large enough
	if(this.scale > 6)
	{
		//switch boolean
		this.switch = true;
		//change colour
		this.r = 255,
		this.g = 200,
		this.b = 255;
	}

	//if it's time to switch
	if(this.switch)
	{
		//prevent debris size getting too small
		if(this.scale < this.minScale)
		{
			this.scale = this.minScale;
		}
		else
		{
			this.scale *= 0.5;
		}
		//increase opacity
		this.opacity += 0.1;
		this.ratio = .2;

	}	else {
		//birth

		//increase size
		this.scale *= 1.1;

		//increase speed
		this.ratio*=1.05;
	}
	ctx.fillStyle = "rgba("+this.r+","+this.g+","+this.b+","+this.opacity+")";
	ctx.fillRect(this.x - (this.w*this.scale)/2, this.y - (this.h*this.scale)/2, this.w*this.scale, this.h*this.scale);
};

debris.prototype.move = function()
{	
	if (this.y > 680) {
		this.vy = -this.vy;
		this.y = 680;
	}

	this.x += this.vx*this.ratio;
	this.y += this.vy*this.ratio;
	

};

//
// RING
//

var ring = function(x,y)
{
	//position & size
	this.x = x;
	this.y = y;
	this.w = 2;
	this.h = 2;

	this.speed = 1.1;

	this.ratio = 1;

	this.angle = Math.random()*360;

	this.vx = Math.sin(this.angle*this.speed);
	this.vy = Math.cos(this.angle*this.speed);

	this.opacity = 1;

};

ring.prototype.draw = function(ctx) {
	if(this.opacity < .01) {
		this.opacity = .01;
	} else {
		this.opacity -= 0.01;
	}
	
	ctx.fillStyle = "rgba(255,255,255,"+this.opacity+")";
	ctx.fillRect(this.x - (this.w)/2, this.y - (this.h)/2, this.w, this.h);
};

ring.prototype.move = function() {
	this.x += this.vx*this.ratio;
	this.y += this.vy*this.ratio;
	this.ratio *= 1.03;
};


