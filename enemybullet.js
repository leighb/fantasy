var enemyBullet = function(parent)
{
	this.x = parent.x;
	this.y = parent.y;
	//this.vx = parent.vx;
	//this.vy = 5;

	this.speed = {x:1, y:1};

	this.size = 10;

	//this.shift = { x: parent.x, y: parent.y };

	this.target = {x:0, y:0};
	this.vx;
	this.vy;

};

enemyBullet.prototype.draw = function(ctx)
{
	ctx.fillStyle = "#5acdb1";
	ctx.fillRect(this.x - this.size/2, this.y - this.size /2, this.size, this.size);
};

enemyBullet.prototype.move = function()
{

	//console.log(this.tx);

	this.target.x = ourShip.x;

	if(this.target.x < this.x) {
		this.vx = this.x - this.target.x;
	} else {
		this.vx = this.target.x - this.x;
	}

	this.speed.x = this.vx/20;

	if (this.target.x < this.x) {
		this.x = this.x - this.speed.x;
	}	else {
		this.x = this.x + this.speed.x;
	}

	this.target.y = ourShip.y;

	if(this.target.y < this.y) {
		this.vy = this.y - this.target.y;
	} else {
		this.vy = this.target.y - this.y;
	}

	this.speed.y = this.vy/20;

	if (this.target.y < this.y) {
		this.y = this.y - this.speed.y;
	}	else {
		this.y = this.y + this.speed.y;
	}

	//this.shift.x = ( ourShip.x - this.shift.x) * (this.speed);
	//this.shift.y = ( ourShip.y - this.shift.y) * (this.speed);

	

	//this.x = this.x + this.shift.x;
	//this.y = this.y + this.shift.y;
	//console.log(this.x);
	/*
	//ship is below
	if(this.y < ourShip.y)
	{
		if(this.x < ourShip.x)
			this.x += this.speed;
		this.y += this.speed;
	}

	//ship is above
	if(this.y > ourShip.y)
	{
		if(this.x < ourShip.x)
			this.x += this.speed;
		this.y -= this.speed;
	}*/
};