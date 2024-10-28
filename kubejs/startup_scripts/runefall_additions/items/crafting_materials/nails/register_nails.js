StartupEvents.registry('item', event => {
	// Copper Nails - Basic
	event.create('runefall:copper_nails')
		.texture('runefall:item/nails/copper_nails')
		.maxStackSize(16)
		.tag('runefall:items/nails/tiers/basic')
		.tag('runefall:items/nails')
	
	console.log('Registered Nail Items')
})