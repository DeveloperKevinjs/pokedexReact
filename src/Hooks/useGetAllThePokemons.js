import { useEffect, useState } from 'react';
import { getAllPokemonsList } from '../Logic/getAllThePokemons.js';

export function useGetAllThePokemons({ setLoading }) {
	const [allPokemonList, setAllPokemonList] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const newAllPokemons = await getAllPokemonsList(setLoading);
			setAllPokemonList(newAllPokemons);
		};
		fetchData();
	}, []);
	return { allPokemonList };
}
