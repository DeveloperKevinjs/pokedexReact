import { DotSpinner } from '@uiball/loaders';
export const Loader = () => {
	return (
		<div className='m-auto flex h-[200px]  w-screen max-w-[1000px] items-center justify-center'>
			<DotSpinner size={40} speed={0.9} color='black' />
		</div>
	);
};
