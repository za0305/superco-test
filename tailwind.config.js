/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js,liquid}"],
	theme: {
		colors: {
			white: '#fff',
			black: '#000',
			transparent: 'transparent',
			accent: 'var(--accent_color)',
			bgcolor: 'var(--background_color)',
			bgpage: 'var(--background_page)',
			textcolor: 'var(--text_color)',
			titlecolor: 'var(--title_color)',
			invtext: 'var(--text_color_inverted)',
			invtitle: 'var(--title_color_inverted)',
			link: 'var(--link_color)',
			linkhover: 'var(--link_hover_color)',
		},
		fontFamily: {
			platform: 'Platform',
			gtsuper: 'GTSuper', 
			gtsupertext: 'GTSuper-text',
			gtsuperi: 'GTSuper-italic',
			gtsupertexti: 'GTSuper-text-italic', 
		},
		fontSize: {
			xs: ['12px', '12px'],
			sm: ['14px', '14px'],
			base: ['14px', '18px'],
			lg: ['16px', '16px'],
			xl: ['18px', '22px'],
			'2xl': ['24px', '32px'],
			'3xl': ['32px', '32px'],
			'4xl': ['64px', '64px'],
			'5xl': ['80px', '80px'],
		},
		container: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1360px',
				'2xl': '1536px',
			}
		},
		extend: {
			transitionProperty: {
				'width': 'width',
			}
		},
	},
	plugins: [],
}

