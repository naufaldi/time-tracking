module.exports = {
  purge: ['./pages/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    boxShadow: {
      sm: '3px 2px 0px 0px hsl(0,0%,20%);',
      DEFAULT: '6px 5px 0px 0px hsl(0,0%,20%);',
      'cool-gray': '6px 5px 0px 0px  	hsl(220, 13%, 91%);',
      'cool-gray-sm': '3px 2px 0px 0px 	hsl(220, 13%, 91%);',
    },
    extend: {
      colors: {
        acapulco: {
          500: 'hsl(169,24%,55%)',
          600: 'hsl(175,24%,55%)',
          700: 'hsl(180,24%,55%)',
        },
        gray: {
          500: 'hsl(0,0%,98%)',
        },
        dark: {
          200: 'hsl(240,1%,19%)',
          500: 'hsl(169,19%,16%)',
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ['dark'],
    },
  },
  plugins: [],
};
