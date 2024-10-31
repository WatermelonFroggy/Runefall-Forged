ServerEvents.tags('item', event => {
	
	// Tiered Planked Item Tiers and Tags
	event.add('runefall:tiered_planks/tiers/primitive', '#minecraft:planks') 
		// Planks add "runefall:items/tiered_planks/tiers/primitive" Tag
	event.add('runefall:tiered_planks', '#minecraft:planks') 
		// Planks add "runefall:items/tiered_planks" Tag
	

	
	// Mortared Stone Item Tiers and Tags
	event.add('runefall:tiered_stones/tiers/primitive', '#forge:cobblestone/normal') 
		// Cobblestones add "runefall:items/tiered_stones/tiers/primitive" Tag
	event.add('runefall:tiered_stones', '#forge:cobblestone/normal')
		// Cobblestones add "runefall:items/tiered_stones" Tag
	
	
	console.log('Applied Tiered Tags')
})