var backgrounds = function(starSpeedQuotient)
{
	//number of backgrounds
	numOfBackgrounds = 3;
	//BG image array
	this.BGArray = [];
	this.nextIndex = 1;
	/*
	//create BG images and add to BGArray
	for (var i = 0; i < numOfBackgrounds; i++)
	{
		if(i==0) {
			this.BGArray.push(new background(true, i));
		} else {
			this.BGArray.push(new background(false, i));
		}		
	}
	*/

	//this.BGArray.push(new background(true, 0));
	//this.BGArray.push(new background(false, 1));

	//this.currentBG = this.BGArray[0];
	//this.nextBG = this.BGArray[1];

	this.bg1 = new background(true);
	this.bg2 = new background(false,0,1280);
};

backgrounds.prototype.draw = function(ctx)
{
	this.bg1.draw(ctx);
	this.bg2.draw(ctx);
	//this.currentBG.draw(ctx);
	//this.nextBG.draw(ctx);	
};

backgrounds.prototype.move = function()
{
	this.bg1.move();
	this.bg2.move();

	if(this.bg1.x == -this.bg1.w) {
		//console.log('switching BGs @ '+this.bg1.x);
		this.bg1 = this.bg2;
		this.bg2 = new background(false,this.bg1.x,this.bg1.w);
	}
	/*
	//if end of background reaches the start of the canvas
	if (this.currentBG.x <= -this.currentBG.width) {
		//make the next background into the current background
		this.currentBG = this.nextBG;
		
		//increment the next index
		var i = this.nextIndex + 1;

		if(i == 3) {
			//if at the end of the array, jump to start
			this.nextIndex = 0;
		} else {
			//else leave the next index as is
			this.nextIndex = i;
		}

		//make the next 
		//this.nextBG = this.BGArray[this.nextIndex];
		//this.nextBG.x = this.nextBG.width;
		this.currentBG.x = 0;
	} else {

	this.currentBG.move(starSpeedQuotient);
	this.nextBG.move(starSpeedQuotient);
}
*/

	
	//this.currentBG.x -= 1;
};