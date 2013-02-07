window.onload = function()
{
	//general variables
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var W = 1280, H = 720;
	canvas.width = W;
	canvas.height = H;

	var fps = 33;//33;

	var starCount = 100;
	this.starSpeedQuotient = 0;

	var particleCount = 100;

	var shipRotation = 0;
	var shipXScale = 1;

	//setup keypress
	this.keyUp = false,
  this.keyDown  = false,
  this.keyLeft  = false,
  this.keyRight = false;
  this.keyX = false;	
  this.keyZ = false;	

	//create all the things
	this.ourUtils = new utils();
	this.ourEnemies = new enemies();
	var ourInput = new input();
	this.ourOrdnance = new ordnance();
	this.ourBGs = new backgrounds(starSpeedQuotient);
	this.ourShip = new ship(shipRotation,shipXScale);
	this.ourStars = new stars(starCount);
	this.ourParticles = new particles(particleCount);
	//this.ourShadow = new shadow();
	

	function loop()
	{
		draw(ctx);
		mover();
		this.ourEnemies.generateEnemies();
  };

  setInterval(loop, fps);		

};