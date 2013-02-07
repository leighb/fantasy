var enemyBullet = function(parent)
{
	//position & size
	this.x = parent.x;
	this.y = parent.y;
	this.size = 10;

	//speed & distance to travel
	this.speed = {x:1, y:1};
	this.distance = {x:0, y:0};

	//target location
	this.target = {x:0, y:0};

};

enemyBullet.prototype.draw = function(ctx)
{
	//draw bullet
	ctx.fillStyle = "#5acdb1";
	ctx.fillRect(this.x - this.size/2, this.y - this.size /2, this.size, this.size);
};

enemyBullet.prototype.move = function()
{
	//set target x & y
	this.target.x = ourShip.x;
	this.target.y = ourShip.y;

	if(this.target.x < this.x) {
		this.distance.x = this.x - this.target.x;
	} else {
		this.distance.x = this.target.x - this.x;
	}

	this.speed.x = this.distance.x/20;

	if (this.target.x < this.x) {
		this.x = this.x - this.speed.x;
	}	else {
		this.x = this.x + this.speed.x;
	}

	if(this.target.y < this.y) {
		this.distance.y = this.y - this.target.y;
	} else {
		this.distance.y = this.target.y - this.y;
	}

	this.speed.y = this.distance.y/20;

	if (this.target.y < this.y) {
		this.y = this.y - this.speed.y;
	}	else {
		this.y = this.y + this.speed.y;
	}

};