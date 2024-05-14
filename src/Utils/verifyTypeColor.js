const COLORSFORPOKEMONSTYPES = {
	grass: 'bg-green-500',
	poison: 'bg-purple-500',
	fire: 'bg-orange-500',
	flying: 'bg-blue-300',
	water: 'bg-blue-500',
	bug: 'bg-lime-500',
	normal: 'bg-gray-500',
	electric: 'bg-yellow-400',
	ground: 'bg-amber-700',
	fairy: 'bg-pink-500',
	fighting: 'bg-red-500',
	psychic: 'bg-yellow-600',
	rock: 'bg-gray-700',
	steel: 'bg-gray-600',
	ice: 'bg-gray-200',
	ghost: 'bg-gray-900',
	dark: 'bg-blue-800',
	dragon: 'bg-red-800'
};
export const verifyTypeColor = typePokemon => {
	for (const element in COLORSFORPOKEMONSTYPES) {
		if (element === typePokemon) {
			return COLORSFORPOKEMONSTYPES[element];
		}
	}
};
