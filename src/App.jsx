import './App.css';

import { Header } from './Components/Header';
import { Filter } from './Components/Icons/Filter';
import { Card } from './Components/Card';
import { useEffect, useRef, useState } from 'react';
import { Modal } from './Components/Modal';
import { animateScroll as scroll } from 'react-scroll';
import { capitalizeFirstLetter } from './Utils/constans.js';
import { verifyTypeColor } from './Utils/verifyTypeColor';
import { useGetMenu } from './Hooks/useGetMenu';
import { useGetFiftyPokemons } from './Hooks/useGetFiftyPokemons.js';
import { useGetAllThePokemons } from './Hooks/useGetAllThePokemons';

function App() {
	// Simple states
	const [offset, setOffSet] = useState(0);
	const [loading, setLoading] = useState(true);
	const [stateModal, setStateModal] = useState(false);
	const [activeOnchage, setActiveOnchage] = useState(false);
	const modalRef = useRef(null);

	// States created Hooks
	const { pokemonList } = useGetFiftyPokemons({ offset, setLoading });
	const { allPokemonList } = useGetAllThePokemons({ setLoading });
	const { handleClickMenu, ClosedMenu, verifyStatusMenu } = useGetMenu();

	// Slightly more complex states
	const [pokemonFilter, setPokemonFilter] = useState([]);
	const [pokemonFilterSearch, setPokemonFilterSearch] = useState([]);
	const [dataModalPokemon, setDataModalPokemon] = useState([]);

	useEffect(() => {
		const handleOutsideClick = event => {
			if (modalRef.current.parentNode === event.target) {
				setStateModal(false);
			}
		};
		document.body.addEventListener('click', handleOutsideClick);

		return () => {
			document.body.removeEventListener('click', handleOutsideClick);
		};
	}, [stateModal]);

	const handleClickMorePokemons = () => {
		setOffSet(offset + 50);
	};

	const ClosedModal = () => {
		setStateModal(false);
	};

	const arregloPokemonFilter = eve => {
		if (eve.target.checked) {
			const filterResult = allPokemonList.filter(pokemon =>
				pokemon.types.map(type => type.type.name).includes(eve.target.name)
			);

			setPokemonFilter([...pokemonFilter, ...filterResult]);
		} else {
			const filterResult = pokemonFilter.filter(
				pokemon =>
					!pokemon.types.map(type => type.type.name).includes(eve.target.name)
			);
			setPokemonFilter([...filterResult]);
		}
	};
	const activeModal = id => {
		const dataPokemon = allPokemonList.find(pokemon => pokemon.id === id);
		if (dataPokemon) {
			setStateModal(true);
		}
		setDataModalPokemon(dataPokemon);
	};

	const search = namePokemon => {
		if (!namePokemon.trim()) {
			setPokemonFilterSearch([]);
			setActiveOnchage(false);
			return;
		}
		setActiveOnchage(true);
		const filterForName = allPokemonList.filter(pokemon =>
			pokemon.species.name
				.toLowerCase()
				.includes(namePokemon.toLocaleLowerCase())
		);
		setPokemonFilterSearch([...filterForName]);
	};
	const handleUpAll = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<Modal
				ClosedModal={ClosedModal}
				ref={modalRef}
				capitalizeFirstLetter={capitalizeFirstLetter}
				verifyTypeColor={verifyTypeColor}
				stateModal={stateModal}
				dataModalPokemon={dataModalPokemon}
			></Modal>
			<Header
				ClosedMenu={ClosedMenu}
				arregloPokemonFilter={arregloPokemonFilter}
				verifyStatusMenu={verifyStatusMenu}
				search={search}
			></Header>
			<section className='m-customized2 flex w-[90%]  max-w-[1000px] flex-col justify-center gap-4 md:m-auto'>
				<button onClick={handleClickMenu} className='flex gap-3'>
					<Filter></Filter>
					<span className='text-xl font-semibold'>Filter</span>
				</button>
				{(pokemonFilterSearch.length > 0 ||
					(pokemonFilterSearch.length === 0 && activeOnchage === true)) && (
					<section className='flex w-[90%]  max-w-[1000px]'>
						<div className='text-xl font-bold tracking-widest'>
							{`Se encontraron ${pokemonFilterSearch.length} resultados`}
						</div>
					</section>
				)}
			</section>

			<main className='m-customized2 w-[90%]  md:max-w-[1000px]  '>
				<div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 '>
					<Card
						loading={loading}
						activeModal={activeModal}
						verifyTypeColor={verifyTypeColor}
						activeOnchage={activeOnchage}
						pokemonList={pokemonList}
						pokemonFilter={pokemonFilter}
						pokemonFilterSearch={pokemonFilterSearch}
					></Card>
				</div>
				{!loading && !activeOnchage && (
					<div className='my-4 flex justify-center'>
						<button
							onClick={handleClickMorePokemons}
							className='rounded-md border-2 border-black bg-customized px-9 py-2 text-xl font-semibold  tracking-widest shadow-customized3  duration-200 hover:scale-105'
						>
							Load More
						</button>
					</div>
				)}
			</main>
			<div className='fixed -bottom-12 right-10'>
				<button
					title='Up'
					onClick={handleUpAll}
					className='relative m-customized flex h-12 w-12 overflow-hidden rounded-full border-2 border-black 
					bg-customized duration-200 hover:scale-125'
				>
					<div className='absolute top-[40%] h-[1px] w-full bg-black shadow-customized'></div>
					<div
						className='z-[1] m-auto grid h-4 w-4 place-items-center rounded-full border-2 border-black bg-[#565658] 
									before:col-[1/2] before:row-[1/2] before:h-2 before:w-2 before:rounded-full before:border-inherit before:bg-white 
									after:col-[1/2] after:row-[1/2] after:h-1 after:w-1 after:rounded-full after:border-inherit after:bg-white'
					></div>
				</button>
			</div>
		</>
	);
}

export default App;
