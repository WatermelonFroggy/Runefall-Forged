StartupEvents.registry('block', event => {
	
	// Treated Planks - Basic
	event.create('runefall:light_treated_planks')
		.displayName('Light Treated Planks')
		.soundType('wood')
		.hardness(3.0)
		.resistance(5.0)
		.tagBoth('runefall:treated_planks')
		.tagBoth('runefall:tiered_planks/tiers/basic')
		.requiresTool(false)
		.tagBlock('minecraft:mineable/axe')
		.textureAll('runefall:block/tiered_planks/light_treated_planks')
	
	console.log('Registered Treated Planks')
})