ServerEvents.recipes(event => {
	// Tiered Planks Recipes
	
	event.shaped(
		Item.of('runefall:light_treated_planks', 3), // arg 1: output
		[
			'ABA',
			'ACA', // arg 2: the shape (array of strings)
			'ABA'
		],
		{
			A: '#runefall:tiered_planks/tiers/primitive',
			B: '#runefall:nails/tiers/basic',
			C: '#runefall:oil'
		}
	)
	
	console.log('Registered Tiered Planks Recipes')
})