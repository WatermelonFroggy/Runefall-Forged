StartupEvents.registry('item', event => {
	
	// Lime Mortar - Basic Tier
	event.create('runefall:lime_mortar')
		.texture('runefall:item/mortars/lime_mortar')
		.maxStackSize(64)
		.tag('runefall:mortar/tiers/basic')
		.tag('runefall:mortar')
	
	// Clay Mortar - Refined Tier
	event.create('runefall:clay_mortar')
		.texture('runefall:item/mortars/clay_mortar')
		.maxStackSize(64)
		.tag('runefall:mortar/tiers/refined')
		.tag('runefall:mortar')
	
	// Enchanted Mortar - Exquisite Tier
	event.create('runefall:enchanted_mortar')
		.texture('runefall:item/mortars/enchanted_mortar')
		.maxStackSize(64)
		.tag('runefall:mortar/tiers/exquisite')
		.tag('runefall:mortar')
	
	// Elderash Mortar - Basic Tier
	event.create('runefall:elderash_mortar')
		.texture('runefall:item/mortars/elderash_mortar')
		.maxStackSize(64)
		.tag('runefall:mortar/tiers/flawless')
		.tag('runefall:mortar')
	
	console.log('Registered Mortar Items')
})