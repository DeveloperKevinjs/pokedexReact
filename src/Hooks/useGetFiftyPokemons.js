import { useEffect, useState } from 'react';
import { getPokemonsList } from '../Logic/getFiftyPokemons.js';
export function useGetFiftyPokemons({ offset, setLoading }) {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const newPokemonList = await getPokemonsList(
				50,
				offset,
				pokemonList,
				setLoading
			);
			setPokemonList(newPokemonList);
		};

		fetchData();
	}, [offset]);
	return { pokemonList };
}
