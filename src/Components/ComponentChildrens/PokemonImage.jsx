export const PokemonImage = ({ el }) => {
	return (
		<div className='flex justify-center rounded-t-md  bg-gray-200 p-2'>
			<img
				className='h-32 w-32 md:h-44 md:w-44 '
				src={el.sprites.other.dream_world.front_default}
				alt={el.species.name}
			/>
		</div>
	);
};
