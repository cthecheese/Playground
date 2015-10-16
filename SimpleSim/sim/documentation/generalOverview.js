/*
Introduction
*/
	The following document contains a general overview of all the functionalities needed to get the engine itself running. The simulator itself will work of a isometric view but many of the core features should be able to run regardless of the engine involved.

/*
Caveats
*/
	While handlers are a big part of the system, they are not required for the system to work! They are meant to be used as libraries to deal with common tasks. If you don’t like the way a handler works, you have two options. First is creating your own handler and the second is to just hardcode how something works.

	Handlers will be made possible later on in the game, for now they are just cumbersome and not worth the time, nor effort to getting the simulator up and running.

/*
Technologies
*/
	JavaScript
	CSS3(?)
	Canvas (http://jsiso.com/)
	HTML5
/*
  Features
*/
	Trading
	Researching
  AI
/*
  Models
*/
Resources (Copper, Silver, Gold, USD, Fish, etc.)
Wallet (Handles holding onto resources)
Units (Civilians, Warriors, Archers, Priests, etc.)
Buildings (Schools, Barracks, Town Center, etc.)
Terrain (Grassland, Snow, Forest, Ocean, etc.)
Handlers (Resource Manipulation, Unit Movement, etc.)
Stats (Magic, Health, Stamina, etc.)
Map
Research (Think Civ5 Technology Branches)
/*
  Resources
*/
	Name
	Abbreviation
	Description
	Functions
		Incrementing
		Decrementing
	Branch of Research
/*
  Units
*/
	Name
	Description
	Branch of Research
	Stats (Object)
		// {
		// 	health: 100,
		// 	mana: 100
		// }
	Movement Speed
	Unit Functions (Object)
		// {
		// 	attack: offenseHandler.attack,
		// 	heal: defenseHandler.heal
		// }
