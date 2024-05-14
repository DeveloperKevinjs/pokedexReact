import React from 'react';
export const Modal = React.forwardRef(
	(
		{
			dataModalPokemon,
			stateModal,
			verifyTypeColor,
			capitalizeFirstLetter,
			ClosedModal
		},
		ref
	) => {
		const handleCloseModal = () => {
			ClosedModal();
		};
		return (
			<div className={``}>
				<div
					className={`${
						!stateModal ? 'modalIn' : 'modalOut'
					}  fixed bottom-0 left-0 right-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-customized3`}
				>
					<section
						ref={ref}
						className=' flex h-[650px] w-[95%] flex-col rounded-lg  bg-white md:grid md:h-[600px] md:w-[800px] md:grid-cols-2 '
					>
						<article className=' p-2'>
							<div
								onClick={handleCloseModal}
								className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-black duration-200 hover:scale-125 md:h-12  md:w-12'
							>
								<span className='text-md m-0 p-0 md:text-3xl'>✖️</span>
							</div>
							<div className='flex items-center justify-around md:block'>
								<figure className='flex items-center justify-center  md:h-[415px] md:w-full '>
									<img
										className={`h-[65px] md:h-80`}
										src={
											dataModalPokemon?.sprites?.other?.dream_world
												?.front_default
										}
										alt={`Yo soy ${dataModalPokemon?.species?.name}`}
									/>
								</figure>
								<footer className='flex justify-center'>
									<div className='my-2 flex flex-col gap-3 md:flex-row'>
										{dataModalPokemon?.types?.map((value, index) => (
											<span
												key={index}
												className={`rounded-md ${verifyTypeColor(
													value?.type?.name
												)} px-5 py-1 text-[16px] text-white md:text-xs`}
											>
												{value?.type?.name}
											</span>
										))}
									</div>
								</footer>
							</div>

							<footer className='mt-5 flex justify-around'>
								<div className='flex flex-col items-center justify-center'>
									<span className=' font-sans text-xl font-bold tracking-widest'>
										Altura
									</span>
									<span className='font-normal'>
										{dataModalPokemon?.height}
									</span>
								</div>
								<div className='flex flex-col items-center justify-center'>
									<span className=' font-sans text-xl font-bold tracking-widest'>
										Peso
									</span>
									<span className='font-normal'>{`${dataModalPokemon?.weight}kg`}</span>
								</div>
							</footer>
						</article>
						<aside className='p-2'>
							<header className='my-1 flex items-center justify-center gap-4 md:my-4'>
								<h2 className=' text-3xl font-semibold'>
									{capitalizeFirstLetter(dataModalPokemon?.species?.name)}
								</h2>
								<span className='text-5xl font-bold'>{`#${dataModalPokemon?.id}`}</span>
							</header>
							<main>
								<section className='h-32 md:h-40 '>
									<p className='mb-1 text-lg font-semibold tracking-widest'>
										Abilities
									</p>
									<div className='flex flex-col gap-y-2'>
										{dataModalPokemon?.abilities?.map((value, index) => (
											<span
												key={index}
												className='w-full rounded-md bg-black p-1 text-sm font-normal tracking-widest text-white'
											>
												{capitalizeFirstLetter(value?.ability?.name)}
											</span>
										))}
									</div>
								</section>
								<section>
									<p className='mb-1 text-lg font-semibold tracking-widest'>
										Stats
									</p>
									<div className=' grid grid-cols-2 gap-1 md:gap-3'>
										{dataModalPokemon?.stats?.map((value, index) => (
											<div
												key={index}
												className='flex h-[67px] flex-col items-center justify-center rounded-md bg-gray-300 shadow-customized4 md:h-[90px]'
											>
												<div className='flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-black text-sm md:h-10 md:w-10 md:text-xl '>
													{value?.base_stat}
												</div>
												<span className='font-semibold tracking-widest'>
													{capitalizeFirstLetter(value?.stat?.name)}{' '}
												</span>
											</div>
										))}
									</div>
								</section>
							</main>
						</aside>
					</section>
				</div>
			</div>
		);
	}
);
Modal.displayName = 'Modal';
