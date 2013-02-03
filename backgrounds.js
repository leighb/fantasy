var backgrounds = function(starSpeedQuotient)
{
	//number of background
	numOfBackgrounds = 3;
	//BG image array
	this.BGArray = [];
	this.nextIndex = 1;

	//create BG images and add to BGArray
	for (var i = 0; i < numOfBackgrounds; i++) {
		if(i==0) {
			this.BGArray.push(new background(true, i));
		} else {
			this.BGArray.push(new background(false, i));
		}
		
	};

	this.currentBG = this.BGArray[0];
	this.nextBG = this.BGArray[1];


}

backgrounds.prototype.draw = function(ctx)
{
	//ctx.fillStyle = "#3a354c";
	//ctx.fillRect(0,0,canvas.width,canvas.height);
	
	this.currentBG.draw(ctx);
	this.nextBG.draw(ctx);	
};

backgrounds.prototype.move = function()
{
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

		console.log(this.nextIndex)

		//make the next 
		this.nextBG = this.BGArray[this.nextIndex];
		this.nextBG.x = this.nextBG.width;
		this.currentBG.x = 0;
	} else {

	this.currentBG.move(starSpeedQuotient);
	this.nextBG.move(starSpeedQuotient);
}

	
	//this.currentBG.x -= 1;
};