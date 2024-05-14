import { Search } from './Icons/Search.jsx';
import logo from '../Images/logo.png';
import { FilterType } from './ComponentChildrens/FilterType.jsx';

export const Header = ({
	verifyStatusMenu,
	arregloPokemonFilter,
	ClosedMenu,
	search
}) => {
	const handleSearch = e => {
		search(e.target.value);
	};

	return (
		<header className='flex '>
			<FilterType
				ClosedMenu={ClosedMenu}
				arregloPokemonFilter={arregloPokemonFilter}
				verifyStatusMenu={verifyStatusMenu}
			></FilterType>
			<div className='h-42 m-auto flex w-[90%] max-w-[1000px] flex-col items-center  md:h-36  md:flex-row md:justify-between  '>
				<img
					className='md:m-0 md:w-96 md:p-0'
					src={logo}
					alt='website navigation logo'
				/>
				<div>
					<form
						// onSubmit={handleSubmitSearch}
						className='flex h-24 items-center gap-x-4'
					>
						<div className='flex items-center gap-x-3 rounded-3xl border-[1px] border-black px-5 py-3'>
							<span className='h-5 w-5 stroke-[#555] '>
								<Search></Search>
							</span>
							<input
								name='search'
								className='border-none bg-[#ffde00] text-black outline-none placeholder:text-black md:w-[300px] '
								placeholder='Search pokemon name'
								type='text'
								onChange={handleSearch}
							/>
						</div>
					</form>
				</div>
			</div>
		</header>
	);
};
