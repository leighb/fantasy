var bomb = function()
{
	this.vx = 2;
	this.vy = 3;
	this.x = ourShip.x-10;
	this.y = ourShip.y+10;
	this.hitGround = false;
	this.goingUp = false;
	this.timer = 100;
	this.debris = null;
  this.w = 15;
  this.h = 15;

  //create shadow
  this.shadow = new shadow(this,"square",0,700);
};

bomb.prototype.draw = function(ctx)
{
  //draw shadow
  this.shadow.draw(ctx);

	ctx.fillStyle = "white";
	ctx.fillRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);
	if(this.debris) {
  	this.debris.draw(ctx);
  }
};

bomb.prototype.move = function(array,num)
{
  //move bomb shadow
  this.shadow.move();

	this.x += this.vx;
	this.y += this.vy;

	this.timer --;

	//check if hitting the ground
	if (this.y > canvas.height - 30)
	{
    this.vx *= 0.99;
    this.y = canvas.height -30;
    //bounce back and remove 20% velocity
    this.vy = -this.vy * 0.9;
    this.hitGround = true;
    this.goingUp = true;
  }

  if (this.hitGround && this.goingUp && this.vy > -5 && this.vy < -0.4)
  {
    //speed up when reaching the pinnacle of the arc
    this.vy*= 0.7;
  }
  else if (this.hitGround && this.goingUp && this.vy < -5)
  {
  	//going up at regular speed
    //this.vx *= 0.99;
 		this.vy *= 0.9;
  }
  else if (this.hitGround && this.goingUp && this.vy > -0.4)
  {
  	//switch to free fall
  	this.goingUp = false;
  	//this.vx *= 0.99;
    this.vy = 0.41;
  }
  else if (this.hitGround && this.vy >= 0.41 && this.vy < 5)
  {
    //speed up for inital part of free fall
    this.vy*= 1.3;
  }
  else
  {
    //free fall mode
  	//this.vx *= 0.99;
		this.vy *= 1.1;
  }

  if (this.timer < 0) {
  	//this.explode(array,num);
  }


};

bomb.prototype.explode = function(array,num) {
	//console.log("explode!");

	if(!this.debris) {

		this.debris = new bombDebris(this.x,this.y);
	}

	//setTimeout(function(){array.splice(num, 1);},1000);

};
