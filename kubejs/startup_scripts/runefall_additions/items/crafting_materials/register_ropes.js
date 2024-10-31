StartupEvents.registry('item', event => {
	
	// Rough Rope - Primitive Tier
	event.create('runefall:rough_rope')
		.texture('runefall:item/ropes/rough_rope')
		.maxStackSize(16)
		.tag('runefall:rope')
	
	// Sinew Rope - Basic Tier
	event.create('runefall:sinew_rope')
		.texture('runefall:item/ropes/sinew_rope')
		.maxStackSize(16)
		.tag('runefall:rope')
	
	// Manathread Rope - Basic Tier
	event.create('runefall:manathread_rope')
		.texture('runefall:item/ropes/manathread_rope')
		.maxStackSize(16)
		.tag('runefall:rope')
	
	console.log('Registered Rope Items')
})