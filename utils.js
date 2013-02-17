var utils = function() {
	//utilities
};

utils.prototype.rand = function(min,max)
{
	return (Math.floor(Math.random() * (max - min + 1)) + min); 
};

utils.prototype.newRange = function(oldMin,oldMax,newMin,newMax,value)
{
	//uses an old range and a value from that range to generate an equivalent value in a new range
	var oldRange = (oldMax - oldMin);
	var newRange = (newMax - newMin);
	return (((value - oldMin) * newRange) / oldRange) + newMin;
};

utils.prototype.coords = function(x,y)
{
		this.x = x;
		this.y = y;	
};

utils.prototype.isOnScreen = function(x,y)
{
		if(x > 0 && x < canvas.width && y > 0 && y < canvas.height)
			return true;
		else
			return false;
};

utils.prototype.removeFromArray = function(array,index)
{
  array.splice(index, 1);
};

utils.prototype.screenShake = function()
{
	canvas.className = "screen-shake-off";
	setTimeout(start,250);
	function start() {
		canvas.className = "screen-shake-on";
	}
};


