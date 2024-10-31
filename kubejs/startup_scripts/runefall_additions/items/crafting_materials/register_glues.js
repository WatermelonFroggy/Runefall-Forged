StartupEvents.registry('item', event => {
	
	// Resin - Basic Tier
	event.create('runefall:resin')
		.texture('runefall:item/glues/resin')
		.maxStackSize(64)
		.tag('runefall:item/glue')
	
	// Refined Resin - Refined Tier
	event.create('runefall:refined_resin')
		.texture('runefall:item/glues/refined_resin')
		.maxStackSize(64)
		.tag('runefall:item/glue')
	
	// Arcane Resin - Exquisite Tier
	event.create('runefall:arcane_resin')
		.texture('runefall:item/glues/arcane_resin')
		.maxStackSize(64)
		.tag('runefall:item/glue')
	
	console.log('Registered Glue Items')
})