var shadow = function(parent,shape,rangeMin,rangeMax)
{
	//parameters
	//parent class
	this.parent = parent;
	//desired shape of shadow
	this.shape = shape;
	//defines the parents max & min Y values
	this.rangeMin = rangeMin;
	this.rangeMax = rangeMax;

	//position & size
	this.x = this.parent.x;
	this.y = 700;
	this.w;
	this.h;

	//max width & height
	this.maxWidth = this.parent.w;
	this.maxHeight = this.parent.h * 0.2;

	//other 
	this.opacity = 1;
};

shadow.prototype.draw = function(ctx)
{
	//calculate current % of parent of total range of movement on the y axis
	var parentRatio = ((this.parent.y-(this.parent.h/2))- this.rangeMin)/(this.rangeMax - this.rangeMin);

	//set the shadow sizes based on the above ratio
	this.w = parentRatio*this.maxWidth;
	this.h = parentRatio*this.maxHeight;
	this.opacity = parentRatio*.8;

	//set fill style
	ctx.fillStyle ="rgba(0,0,0,"+this.opacity.toFixed(2)+")";

	//draw shadow based on desired shape
	switch(this.shape)
	{
		case "triangle":
			ctx.beginPath();
			ctx.moveTo(this.x, this.y - this.h / 2);
			ctx.lineTo(this.x + this.w, this.y);
			ctx.lineTo(this.x, this.y + this.h /2);
			ctx.closePath();
			ctx.fill();
			break;
		case "-triangle":
			ctx.beginPath();
			ctx.moveTo(this.x, this.y - this.h / 2);
			ctx.lineTo(this.x - this.w, this.y);
			ctx.lineTo(this.x, this.y + this.h /2);
			ctx.closePath();
			ctx.fill();
			break;
		case "square":
			ctx.fillRect(this.x - this.w /2, this.y - this.h /2, this.w, this.h);
			break;
	}
	
	
};

shadow.prototype.move = function()
{
	//align shadow to parent's x pos
	this.x = this.parent.x;
};