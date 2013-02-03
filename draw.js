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

	//draw ships shadow
	ourShadow.draw(ctx);
	
	//draw ship
	ourShip.draw(ctx);

};

	