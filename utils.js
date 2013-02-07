var utils = function() {
	//utilities
};

utils.prototype.rand = function(min,max)
{
	return (Math.floor(Math.random() * (max - min + 1)) + min); 
};

utils.prototype.newRange = function(oldMin,oldMax,newMin,newMax,value)
{
	var oldRange = (oldMax - oldMin);
	var newRange = (newMax - newMin);
	return (((value - oldMin) * newRange) / oldRange) + newMin;
};

