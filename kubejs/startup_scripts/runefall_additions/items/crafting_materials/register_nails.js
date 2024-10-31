StartupEvents.registry('item', event => {
	
	// Copper Nails - Basic Tier
	event.create('runefall:copper_nails')
		.texture('runefall:item/nails/copper_nails')
		.maxStackSize(16)
		.tag('runefall:nails/tiers/basic')
		.tag('runefall:nails')
	
	// Iron Rivets - Refined Tier
	event.create('runefall:iron_rivets')
		.texture('runefall:item/nails/iron_rivets')
		.maxStackSize(16)
		.tag('runefall:nails/tiers/refined')
		.tag('runefall:nails')
	
	// Bronze Nails - Refined Tier
	event.create('runefall:bronze_nails')
		.texture('runefall:item/nails/bronze_nails')
		.maxStackSize(16)
		.tag('runefall:nails/tiers/refined')
		.tag('runefall:nails')
	
	// Machine Bolts - Advanced Tier
	event.create('runefall:machine_bolts')
		.texture('runefall:item/nails/machine_bolts')
		.maxStackSize(16)
		.tag('runefall:nails/tiers/advanced')
		.tag('runefall:nails')
	
	// Arcane Screws - Flawless Tier
	event.create('runefall:arcane_screws')
		.texture('runefall:item/nails/arcane_screws')
		.maxStackSize(16)
		.tag('runefall:nails/tiers/flawless')
		.tag('runefall:nails')
	
	console.log('Registered Nail Items')
})