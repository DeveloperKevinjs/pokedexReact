export const FilterType = ({
	verifyStatusMenu,
	arregloPokemonFilter,
	ClosedMenu
}) => {
	const handleClosedMenu = () => {
		ClosedMenu();
	};
	const handleChage = e => {
		arregloPokemonFilter(e);
	};

	return (
		<section
			className={`fixed   left-0 top-0 flex h-full w-[60vw] flex-col  justify-center  bg-customized3 md:w-[15vw] md:bg-[#ff0000] ${verifyStatusMenu()} duration-500`}
		>
			<div className='mt-12 flex w-[60%] flex-col items-center'>
				<h2 className='text-3xl font-semibold  text-white'>Types</h2>
				<div className='mt-4 flex flex-col gap-y-2 px-3 text-xl text-white md:text-sm'>
					<label htmlFor='' className=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='grass'
							id='grass'
							onChange={handleChage}
						/>
						Grass
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='fire'
							id='fire'
							onChange={handleChage}
						/>
						Fire
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='bug'
							id='bug'
							onChange={handleChage}
						/>
						Bug
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='fairy'
							id='fairy'
							onChange={handleChage}
						/>
						Fairy
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='dragon'
							id='dragon'
							onChange={handleChage}
						/>
						Dragon
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='ghost'
							id='ghost'
							onChange={handleChage}
						/>
						Ghost
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='ground'
							id='ground'
							onChange={handleChage}
						/>
						Ground
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='normal'
							id='normal'
							onChange={handleChage}
						/>
						Normal
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='psychic'
							id='psychic'
							onChange={handleChage}
						/>
						Psychic
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='steel'
							id='steel'
							onChange={handleChage}
						/>
						Steel
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='dark'
							id='dark'
							onChange={handleChage}
						/>
						Dark
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='electric'
							id='electric'
							onChange={handleChage}
						/>
						Electric
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='fighting'
							id='fighting'
							onChange={handleChage}
						/>
						Fighting
					</label>

					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='flying'
							id='flying'
							onChange={handleChage}
						/>
						Flying
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='ice'
							id='ice'
							onChange={handleChage}
						/>
						Ice
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='poison'
							id='poison'
							onChange={handleChage}
						/>
						Poison
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='rock'
							id='rock'
							onChange={handleChage}
						/>
						Rock
					</label>
					<label htmlFor=''>
						<input
							className='my-0 ml-[2px] mr-2 w-[unset] align-middle'
							type='checkbox'
							name='water'
							id='water'
							onChange={handleChage}
						/>
						Water
					</label>
				</div>
			</div>
			<div className='mb-16 flex justify-end  px-2 md:mb-2 '>
				<div
					onClick={handleClosedMenu}
					className='flex h-10 w-10  cursor-pointer items-center justify-center rounded-full bg-white text-2xl shadow-customized5 duration-200 hover:scale-125'
				>
					❌
				</div>
			</div>
		</section>
	);
};
