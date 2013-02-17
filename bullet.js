var bullet = function()
{
	this.vx = 5;
	this.vy = 20;
	this.x = ourShip.x;
	this.y = ourShip.y+10;
	this.h = 3;
	this.w = 15;

	this.drop = 0;

	//bullet timer (before bullet death)
	this.timer = 180;
	//create shadow
  this.shadow = new shadow(this,"square",0, canvas.height);

  this.hit = false;
  this.enemyHit = null;
  this.enemyHitIndex = null;
  this.explosion = null;
};

bullet.prototype.draw = function(ctx)
{
	//draw shadow
  this.shadow.draw(ctx);

	ctx.fillStyle = "white";
	ctx.fillRect(this.x - this.w/2, this.y - this.h/2, this.w, this.h);

	if(this.explosion)
		this.explosion.draw(ctx);
};

bullet.prototype.move = function(array,index)
{
	//move shadow
	this.shadow.move();

	//move bullet
	this.x += this.vx;
	this.vx *= 1.05;

	//bullet start animation
	if (this.drop < 5)
	{
		this.y += this.vy;
		this.vy *= 0.5;
	}
	else
	{
		this.y -= this.vy;
	}

	this.drop += 1;	

	//
	//HIT TEST
	//

	//if it hasnt hit the target yet
	if(!this.hit)
	{
		//check if target was hit
		for (var i=0; i < ourEnemies.enemyArray.length; i++)
		{
			var o = ourEnemies.enemyArray[i];
			var temp = pntInTriangle(this.x, this.y, o.x,o.y-o.h,o.x-(o.w*2),o.y,o.x,o.y+o.h);
			if (temp) {
				this.hit = temp;
				this.enemyHitIndex = i;
				this.enemyHit = ourEnemies.enemyArray[i];
				break;
			} 
		}

		function pntInTriangle(px, py, x1, y1, x2, y2, x3, y3)
		{
	    var o1 = getOrientationResult(x1, y1, x2, y2, px, py);
	    var o2 = getOrientationResult(x2, y2, x3, y3, px, py);
	    var o3 = getOrientationResult(x3, y3, x1, y1, px, py);

	    return (o1 == o2) && (o2 == o3);
		};

		function getOrientationResult(x1, y1, x2, y2, px, py)
		{
		    var orientation = ((x2 - x1) * (py - y1)) - ((px - x1) * (y2 - y1));
		    if (orientation > 0) {
		        return 1;
		    }
		    else if (orientation < 0) {
		        return -1;
		    }
		    else {
		        return 0;
		    }
		};
	}
	if(this.hit)
	{
		//
		//
		// EXPLSION NOT SHOWING YET FOR SOME REASON!
		//
		//

		//the target has been hit
		if(!this.explosion)
		{
			//reduce target health by damage
			//this.target.health -= this.damage;
			//create an explosion at the current location
			ourUtils.removeFromArray(ourEnemies.enemyArray,this.enemyHitIndex);
			this.explosion = new explosion(this.enemyHit.x,this.enemyHit.y,true);
		}

		this.explosion.move();
		this.timer --;
	}
	
	//if the timer has run out
	if(this.timer < 0)
  {
    ourUtils.removeFromArray(array,index);
  }
  
};