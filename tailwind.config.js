/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			margin: {
				customized: '70px auto',
				customized2: '25px auto'
			},
			backgroundImage: {
				customized:
					'linear-gradient(#FF3E32 40% , #565658 40% ,#565658 60% , #FFFFFF 60% )',
				customized2:
					'linear-gradient(to bottom, hsl(0, 60%, 50%) 50%, #FFFFFF 50%)'
			},
			boxShadow: {
				customized: '0 44px',
				customized2:
					'0 4px 6px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)',
				customized3: '0 4px 8px rgba(0, 0, 0, 0.4)',
				customized4:
					'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
				customized5:
					'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'
			},
			dropShadow: {
				customized: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.4))'
			},
			gridTemplateColumns: {
				customized: '12% 88%'
			},
			backgroundColor: {
				customized3: 'rgba(0,0,0,0.9)'
			},
			transitionProperty: {
				customized: 'opacity 0.9s ease'
			}
		}
	},
	plugins: []
};
