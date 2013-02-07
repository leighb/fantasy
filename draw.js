var draw = function(ctx)
{

	//draw BG
	ourBGs.draw(ctx);
	
	//draw stars
	ourStars.draw(ctx);

	//draw particles
	ourParticles.draw(ctx);

	//draw bullets	
	ourOrdnance.draw(ctx);

	//draw ship
	ourShip.draw(ctx);

	//draw enemies
	ourEnemies.draw(ctx);

};

	