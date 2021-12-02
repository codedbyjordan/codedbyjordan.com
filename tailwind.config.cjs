const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 }
				}
			},
			animation: {
				fadeIn: 'fadeIn 1s ease-in-out',
				'fadeIn-fast': 'fadeIn 0.4s ease-in-out'
			}
		}
	},

	plugins: []
};

module.exports = config;
