import { PokemonDescription } from './ComponentChildrens/PokemonDescription';
import { PokemonImage } from './ComponentChildrens/PokemonImage';
import { Loader } from './Loader';

export const Card = ({
	pokemonList,
	verifyTypeColor,
	activeOnchage,
	pokemonFilter,
	activeModal,
	pokemonFilterSearch,
	loading
}) => {
	const arregloPokemonFilter = [...pokemonFilter];
	const arregloUnique = Array.from(
		new Set(arregloPokemonFilter.map(pokemon => pokemon.name))
	).map(name => arregloPokemonFilter.find(pokemon => pokemon.name === name));

	const handleModal = id => {
		activeModal(id);
	};
	return (
		<>
			{loading ? (
				<Loader></Loader>
			) : activeOnchage === true ? (
				pokemonFilterSearch.map(el => (
					<button
						onClick={() => handleModal(el.id)}
						key={el.id}
						className='rounded-t-md border border-black shadow-customized2'
					>
						<PokemonImage el={el}></PokemonImage>
						<PokemonDescription
							el={el}
							verifyTypeColor={verifyTypeColor}
						></PokemonDescription>
					</button>
				))
			) : arregloUnique.length > 0 ? (
				arregloUnique.map(el => (
					<button
						onClick={() => handleModal(el.id)}
						key={el.id}
						className='rounded-t-md border border-black shadow-customized2'
					>
						<PokemonImage el={el}></PokemonImage>
						<PokemonDescription
							el={el}
							verifyTypeColor={verifyTypeColor}
						></PokemonDescription>
					</button>
				))
			) : (
				pokemonList.map(el => (
					<button
						onClick={() => handleModal(el.id)}
						key={el.id}
						className='rounded-t-md border border-black shadow-customized2 '
					>
						<PokemonImage el={el}></PokemonImage>
						<PokemonDescription
							el={el}
							verifyTypeColor={verifyTypeColor}
						></PokemonDescription>
					</button>
				))
			)}
		</>
	);
};
