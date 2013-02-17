var ship = function(shipRotation,shipYScale)
{
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	this.speed = 0.5;
	this.vx = 0;
	this.vy = 0;
	this.friction = 0.93;
	this.w = 60;
	this.h = 60;
	this.maxSpeed = 8;
	this.angle = shipRotation;
	this.yScale = shipYScale;

  this.health = 100;

  //create shadow
  this.shadow = new shadow(this,"triangle",0,canvas.height);
};

ship.prototype.draw = function(ctx)
{
  this.shadow.draw(ctx);

  ctx.save();
  ctx.translate(this.x, this.y);
  ctx.rotate(this.convertToRadians(this.angle));
  ctx.translate(-this.x, -this.y);

  ctx.fillStyle = "white";//"#a3cfb4";

  ctx.beginPath();
  ctx.moveTo(this.x, this.y - this.h/2);
  ctx.lineTo(this.x + this.w, this.y);
  ctx.lineTo(this.x, this.y + this.h/2);
  ctx.closePath();
  ctx.fill();
  
	ctx.restore();
  
};

ship.prototype.move = function()
{
  this.shadow.move();

	//handle keypresses
  if (keyUp) 
  	this.vy -= this.speed;
  else if (keyDown) 
		this.vy += this.speed;
  else 
  	this.vy *= this.friction; 

  if (keyLeft) 
    this.vx -= this.speed;
  else if (keyRight) 
    this.vx += this.speed;
  else 
  	this.vx *= this.friction;

  //update location
  this.x += this.vx;
  this.y += this.vy;

  //limit speed
  if (this.vx > this.maxSpeed)
    this.vx = this.maxSpeed;
  else if (this.vx < -this.maxSpeed)
    this.vx = -this.maxSpeed;

  if (this.vy > this.maxSpeed)
    this.vy = this.maxSpeed;
  else if (this.vy < -this.maxSpeed)
    this.vy = -this.maxSpeed;

  //set appearance variables
  this.angle = this.vy;
  this.xScale = (this.maxSpeed - Math.abs(this.vx))/(this.maxSpeed*4)+0.75;

  //limit movement within the canvas  
  if (this.x > canvas.width) {
    this.x = canvas.width;
    this.vx = -this.vx;
  } else if (this.x < 0) {
    this.x = 0;
    this.vx = -this.vx;
  }

  if (this.y > canvas.height - 50) {
    this.y = canvas.height - 50;
    this.vy = -this.vy;
  } else if (this.y < 0) {
    this.y = 0;
    this.vy = -this.vy;
  }

  starSpeedQuotient = -this.vx;

};

ship.prototype.convertToRadians = function(degree) {
  return degree*(Math.PI/180);
};
