const baseUrl = 'https://pokeapi.co/api/v2/';
export const getAllPokemonsList = async setLoading => {
	const res = await fetch(`${baseUrl}pokemon?limit=500&offset=0`);
	const data = await res.json();

	const arrayToPokemon = data.results.map(async item => {
		const res = await fetch(item.url);
		const data = await res.json();
		return data;
	});

	const result = await Promise.all(arrayToPokemon);

	setLoading(false);
	return result;
};
