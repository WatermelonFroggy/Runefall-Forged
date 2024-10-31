StartupEvents.registry('item', event => {
	
	// Plant Fiber - Primitive Tier
	event.create('runefall:plant_fiber')
		.texture('runefall:item/strings/plant_fiber')
		.maxStackSize(64)
		.tag('c:strings')
	
	// Manathread - Flawless Tier
	event.create('runefall:manathread')
		.texture('runefall:item/strings/manathread')
		.maxStackSize(64)
		.tag('c:strings')
	
	console.log('Registered String Items')
})