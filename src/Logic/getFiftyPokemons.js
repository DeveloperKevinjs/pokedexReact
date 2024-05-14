const baseUrl = 'https://pokeapi.co/api/v2/';
export const getPokemonsList = async (
	limit = 50,
	offset,
	pokemonList = [],
	setLoading
) => {
	console.log(limit);
	console.log(offset);
	const res = await fetch(`${baseUrl}pokemon?limit=${limit}&offset=${offset}`);
	const data = await res.json();
	const arrayToPokemon = data.results.map(async item => {
		const res = await fetch(item.url);
		const data = await res.json();
		return data;
	});
	const result = await Promise.all(arrayToPokemon);
	const newPokemonList = [...pokemonList, ...result];
	const uniquePokemonList = Array.from(
		new Set(newPokemonList.map(pokemon => pokemon.name))
	).map(name => newPokemonList.find(pokemon => pokemon.name === name));
	setLoading(false);

	return uniquePokemonList;
};
