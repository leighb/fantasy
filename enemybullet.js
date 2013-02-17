var enemyBullet = function(parent)
{
	//position & size
	this.x = parent.x;
	this.y = parent.y;
	this.size = 6;

	//line segment positions
	this.trailArray = [];
	this.trailLength = 10;

	//speed & distance to travel
	this.speed = {x:1, y:1};
	this.distance = {x:0, y:0};

	//target location
	this.target = ourShip;

	//explode stuff
	//remove timer
  this.timer = 180;
  this.explosion = null;

  this.hit = false;

  this.damage = 1;

};

enemyBullet.prototype.draw = function(ctx)
{
	//if explosion exists
	if(this.explosion) 
	{
		//draw explosion
	  this.explosion.draw(ctx);
	} 
	else 
	{
		for (var i=0;i<this.trailArray.length; i++)
		{
			var t = this.trailArray[i];	
	  	
			var o = ourUtils.newRange(0,8,0,1,i);
			ctx.fillStyle = "rgba(90,205,177,"+o+")";
			ctx.fillRect(t.x - this.size/2, t.y - this.size/2, this.size, this.size);
	  }
	}
};

enemyBullet.prototype.move = function(array,index)
{
	//set target x & y
	this.target.x = ourShip.x;
	this.target.y = ourShip.y;

	this.trailArray.push(new ourUtils.coords(this.x, this.y));

	//if there is no more space in the array
	if(this.trailArray.length >= this.trailLength) {
		this.trailArray.shift();
	}	

	if(this.target.x < this.x)
	{
		//set Xdistance to target
		this.distance.x = this.x - this.target.x;
		//adjust Xspeed
		this.speed.x = this.distance.x/20;
		//move ship left
		this.x = this.x - this.speed.x;
	}
	else
	{
		//set Xdistance to target
		this.distance.x = this.target.x - this.x;
		//adjust Xspeed
		this.speed.x = this.distance.x/20;
		//move ship right
		this.x = this.x + this.speed.x;
	}

	if(this.target.y < this.y)
	{
		//set Ydistance to target
		this.distance.y = this.y - this.target.y;
		//adjust Yspeed
		this.speed.y = this.distance.y/20;
		//move ship up
		this.y = this.y - this.speed.y;
	}
	else
	{
		//set Ydistance to target
		this.distance.y = this.target.y - this.y;
		//adjust Yspeed
		this.speed.y = this.distance.y/20;
		//move ship down
		this.y = this.y + this.speed.y;
	}

	//
	//HIT TEST
	//

	//if it hasnt hit the target yet
	if(!this.hit)
	{
		//check if target was hit
		this.hit = pntInTriangle(this.x,this.y, this.target.x, this.target.y-this.target.h/2,this.target.x+this.target.w,this.target.y,this.target.x, this.target.y +this.target.h/2);

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
	else
	{
		//the target has been hit
		if(!this.explosion)
		{
			//reduce target health by damage
			this.target.health -= this.damage;
			//create an explosion at the current location
			this.explosion = new explosion(this.x,this.y);
		}

		this.timer --;
	}

	//if the timer has run out
	if(this.timer < 0)
  {
    ourUtils.removeFromArray(array,index);
  }

};
