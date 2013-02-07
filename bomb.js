var bomb = function()
{
  //position and size;
	this.x = ourShip.x-10;
	this.y = ourShip.y+10;
  this.w = 15;
  this.h = 15;

  //speed
  this.vx = 2;
  this.vy = 3;

  //bounce variables
	this.hitGround = false;
	this.goingUp = false;
	
  //bomb timer
  this.timer = 40;
  //remove timer
  this.timer2 = 180;
  this.debris = null;

  //colour
  this.color = "rgba(255,255,255,";
  this.opacity = 1;

  //shadow
  this.shadow = new shadow(this,"square",0,700);
};

bomb.prototype.draw = function(ctx,array,num)
{
  if(this.timer<0)
  {
    //explode

    //start timer2 countdown
    this.timer2 --;

    if(this.timer2<0)
    {
      this.remove(array,num)
    }

    if(this.debris) {
      this.debris.draw(ctx);
    }
  }
  else
  {
    //draw shadow
    this.shadow.draw(ctx);

    //draw bomb
    ctx.fillStyle = this.color+this.opacity+")";
    ctx.fillRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);
  }
};

bomb.prototype.move = function()
{
  //move bomb shadow
  this.shadow.move();

  //move the bomb
	this.x += this.vx;
	this.y += this.vy;

	//timer countdown
  this.timer --;

  //BOUNCE
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
		this.vy *= 1.1;
  }

  if (this.timer < 0) {
  	this.explode();
  }

  if(this.debris) {
    this.debris.move();
  }


};

bomb.prototype.explode = function()
{
	if(!this.debris) {

		this.debris = new bombDebris(this.x,this.y);
	}
};

bomb.prototype.remove = function(array,num)
{
  array.splice(num, 1);
};
