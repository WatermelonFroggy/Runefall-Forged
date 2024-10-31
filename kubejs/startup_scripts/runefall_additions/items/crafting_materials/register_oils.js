StartupEvents.registry('item', event => {
	
	// Animal Fat - Primitive Tier
	event.create('runefall:animal_fat').food(food => {
		food
			.hunger(8)
			.saturation(12)
			.alwaysEdible()
			.meat()
		})
		.texture('runefall:item/oils/animal_fat')
		.maxStackSize(16)
		.tag('runefall:oil/tiers/primitive')
		.tag('runefall:oil')
	
	// Plant Oil - Basic Tier
	event.create('runefall:plant_oil')
		.texture('runefall:item/oils/plant_oil')
		.maxStackSize(16)
		.tag('runefall:oil/tiers/basic')
		.tag('runefall:oil')
	
	// Refined Oil - Refined Tier
	event.create('runefall:refined_oil')
		.texture('runefall:item/oils/refined_oil')
		.maxStackSize(16)
		.tag('runefall:oil/tiers/refined')
		.tag('runefall:oil')
	
	// Alchemical Oil - Advanced Tier
	event.create('runefall:alchemical_oil')
		.texture('runefall:item/oils/alchemical_oil')
		.maxStackSize(16)
		.tag('runefall:oil/tiers/advanced')
		.tag('runefall:oil')
	
	// Herbal Oil - Exquisite Tier
	event.create('runefall:herbal_oil')
		.texture('runefall:item/oils/herbal_oil')
		.maxStackSize(16)
		.tag('runefall:oil/tiers/exquisite')
		.tag('runefall:oil')
	
	// Elderwood Oil - Flawless Tier
	event.create('runefall:elderwood_oil')
		.texture('runefall:item/oils/elderwood_oil')
		.maxStackSize(16)
		.tag('runefall:oil/tiers/flawless')
		.tag('runefall:oil')
	
	console.log('Registered Oil Items')
})