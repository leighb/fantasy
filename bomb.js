var bomb = function()
{
	this.vx = 7;
	this.vy = 3;
	this.x = ourShip.x-10;
	this.y = ourShip.y+10;
	this.hitGround = false;
	this.goingUp = false;
	this.timer = 100;
	this.debris = null;
}

bomb.prototype.draw = function(ctx) {
	ctx.fillStyle = "white";
	ctx.fillRect(this.x, this.y - 5, 15, 15);
	if(this.debris) {
  	this.debris.draw(ctx);
  }
};

bomb.prototype.move = function(array,num)
{
	this.x += this.vx;
	this.y += this.vy;

	this.timer --;

	//check if hitting the ground
	if (this.y > canvas.height - 30)
	{
    this.y = canvas.height -30;
    this.vy = -this.vy;
    this.hitGround = true;
    this.goingUp = true;
  }

  if (this.hitGround && this.goingUp && this.vy < -0.5)
  {
  	//going up after hitting the ground
 		this.vy *= 0.90;
  }
  else if (this.hitGround && this.goingUp && this.vy > -0.5)
  {
  	//going down after reaching a peak
  	this.goingUp = false;
  	this.vy = 0.51;
  	this.vy *= 1.2;
  }
  else
  {
  	this.vx *= 0.95;
		this.vy *= 1.1;
  }

  if (this.timer < 0) {
  	this.explode(array,num);
  }


};

bomb.prototype.explode = function(array,num) {
	console.log("explode!");

	if(!this.debris) {

		this.debris = new bombDebris(this.x,this.y);
	}

	//setTimeout(function(){array.splice(num, 1);},1000);

};
