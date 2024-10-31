StartupEvents.registry('item', event => {
	
	// Raw Hide - Primitive Tier
	event.create('runefall:raw_hide')
		.texture('runefall:item/hides/raw_hide')
		.maxStackSize(64)
		.tag('runefall:item/hide/raw_hide')
	
	// Oiled Hide - Primitive Tier
	event.create('runefall:oiled_hide')
		.texture('runefall:item/hides/oiled_hide')
		.maxStackSize(64)
		.tag('runefall:item/hide/oiled_hide')
	
	
	// Leather Strips - Basic Tier
	event.create('runefall:leather_strips')
		.texture('runefall:item/hides/leather_strips')
		.maxStackSize(64)
		.tag('runefall:item/hide/leather_strips')
	
	// Dragon Infused Leather - Flawless
	event.create('runefall:dragon_infused_leather')
		.texture('runefall:item/hides/dragon_infused_leather')
		.maxStackSize(64)
		.tag('runefall:item/hide/dragon_infused_leather')
	
	// Dragon Leather Strips - Basic Tier
	event.create('runefall:dragon_leather_strips')
		.texture('runefall:item/hides/dragon_leather_strips')
		.maxStackSize(64)
		.tag('runefall:item/hide/leather_strips')
	
	console.log('Registered Hide Items')
})