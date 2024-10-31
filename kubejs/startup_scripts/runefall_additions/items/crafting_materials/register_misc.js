StartupEvents.registry('item', event => {
	
	// Quick Lime - Primitive Tier
	event.create('runefall:quick_lime')
		.texture('runefall:item/misc/quick_lime')
		.maxStackSize(64)
		.tag('minecraft:item/sand')
	
	// Elderash - Exquisite Tier
	event.create('runefall:elderash')
		.texture('runefall:item/misc/elderash')
		.maxStackSize(64)
	
	
	console.log('Registered Misc Items')
})