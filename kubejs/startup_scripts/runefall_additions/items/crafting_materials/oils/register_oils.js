StartupEvents.registry('item', event => {
	// Animal Fat - Primitive
	event.create('runefall:animal_fat').food(food => {
		food
			.hunger(8)
			.saturation(12)
			.alwaysEdible()
			.meat()
		})
		.texture('runefall:item/oils/animal_fat')
		.maxStackSize(16)
		.tag('runefall:items/oil/tiers/basic')
		.tag('runefall:items/oil')
	
	console.log('Registered Oil Items')
})