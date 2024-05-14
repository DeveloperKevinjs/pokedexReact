export const PokemonDescription = ({ el, verifyTypeColor }) => {
	return (
		<div className='flex flex-col bg-white p-2'>
			<span className='text-start font-semibold text-gray-400'>
				{`N° ${el.id}`}{' '}
			</span>
			<span className='text-start font-sans font-bold tracking-widest'>
				{el.species.name}{' '}
			</span>
			<div className='my-2 flex gap-1 md:gap-3'>
				{el.types.map((el, index) => (
					<span
						className={`${verifyTypeColor(
							el.type.name
						)} rounded-md px-4  py-1 text-xs  text-white md:px-5`}
						key={index}
					>
						{el.type.name}
					</span>
				))}
			</div>
		</div>
	);
};
