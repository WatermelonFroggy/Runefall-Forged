StartupEvents.registry('item', event => {
	
	// Bronze Alloy - Refined Tier
	event.create('runefall:bronze_alloy_ingot')
		.texture('runefall:item/alloy_ingots/bronze_alloy_ingot')
		.maxStackSize(64)
		.tag('runefall:alloy_ingots/tiers/refined')
		.tag('runefall:alloy_ingots')
	
	event.create('runefall:bronze_alloy_nugget')
		.texture('runefall:item/alloy_nuggets/bronze_alloy_nugget')
		.maxStackSize(64)
		.tag('runefall:alloy_nuggets/tiers/refined')
		.tag('runefall:alloy_nuggets')

	// Refined Andesite Alloy - Refined Tier
	event.create('runefall:refined_andesite_alloy_ingot')
		.texture('runefall:item/alloy_ingots/refined_andesite_alloy_ingot')
		.maxStackSize(64)
		.tag('runefall:alloy_ingots/tiers/refined')
		.tag('runefall:alloy_ingots')
	
	event.create('runefall:refined_andesite_alloy_nugget')
		.texture('runefall:item/alloy_nuggets/refined_andesite_alloy_nugget')
		.maxStackSize(64)
		.tag('runefall:alloy_nuggets/tiers/refined')
		.tag('runefall:alloy_nuggets')

	// Steel - Advanced Tier
	event.create('runefall:steel_ingot')
		.texture('runefall:item/alloy_ingots/steel_ingot')
		.maxStackSize(64)
		.tag('runefall:alloy_ingots/tiers/advanced')
		.tag('runefall:alloy_ingots')
	
	event.create('runefall:steel_nugget')
		.texture('runefall:item/alloy_nuggets/steel_nugget')
		.maxStackSize(64)
		.tag('runefall:alloy_nuggets/tiers/advanced')
		.tag('runefall:alloy_nuggets')

	// Mythril Alloy - Exquisite Tier
	event.create('runefall:mythril_alloy_ingot')
		.texture('runefall:item/alloy_ingots/mythril_alloy_ingot')
		.maxStackSize(64)
		.tag('runefall:alloy_ingots/tiers/exquisite')
		.tag('runefall:alloy_ingots')
	
	event.create('runefall:mythril_alloy_nugget')
		.texture('runefall:item/alloy_nuggets/mythril_alloy_nugget')
		.maxStackSize(64)
		.tag('runefall:alloy_nuggets/tiers/exquisite')
		.tag('runefall:alloy_nuggets')

	// Manasteel - Flawless Tier
	event.create('runefall:manasteel_ingot')
		.texture('runefall:item/alloy_ingots/manasteel_ingot')
		.maxStackSize(64)
		.tag('runefall:alloy_ingots/tiers/flawless')
		.tag('runefall:alloy_ingots')
	
	event.create('runefall:manasteel_nugget')
		.texture('runefall:item/alloy_nuggets/manasteel_nugget')
		.maxStackSize(64)
		.tag('runefall:alloy_nuggets/tiers/flawless')
		.tag('runefall:alloy_nuggets')
	
	console.log('Registered Alloy Items')
})