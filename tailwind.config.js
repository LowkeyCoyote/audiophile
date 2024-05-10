/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily : {
      sans : ['Manrope', 'sans-serif']
    },

    colors : {
      'dark-peach' : '#D87D4A',
      'peach' : '#fbaf85',
      'very-dark-grey' : '#101010',
      'very-light-grey' : '#F1F1F1',
      'almost-white' : '#FAFAFA',
      'white' : '#FFFFFF',
      'black' : '#000000',
      'gray-border' : '#979797',
      'black-button-hover' : '#4C4C4C'
    },

    fontSize : {
      'h1' : '58px',
      'h2' : '40px',
      'h2-mobile' : '22px',
      'h3' : '32px',
      'h4' : '28px',
      'h5' : '24px',
      'h6' : '18px',
      'p' : '15px',
    },
    lineHeight : {
      '10' : '58px',
      '8' : '44px',
      '5' : '25px',
      '4' :'24px'

    },

    backgroundImage : {
      'hero-home-desktop' : "url('/src/assets/home/hero/image-hero-desktop.jpg')",
      'hero-home-tablet' : "url('/src/assets/home/hero/image-hero-tablet.jpg')",
      'hero-home-mobile' : "url('/src/assets/home/hero/image-hero-mobile.jpg')",

      'pattern-circle' : "url('/src/assets/home/pattern/pattern-circles.svg')",

      'grid-home-zx7-desktop' : "url('/src/assets/home/image-speaker-zx7-desktop.jpg')",
      'grid-home-zx7-tablet' : "url('/src/assets/home/image-speaker-zx7-tablet.jpg')",
      'grid-home-zx7-mobile' : "url('/src/assets/home/image-speaker-zx7-mobile.jpg')",

      'grid-home-zx9-desktop' : "url('/src/assets/home/image-speaker-zx9-desktop.png')",
      'grid-home-zx9-tablet' : "url('/src/assets/home/image-speaker-zx9-tablet.png')",
      'grid-home-zx9-mobile' : "url('/src/assets/home/image-speaker-zx9-mobile.png')"


    },
    
    

    screens: {

      md: { max: "1024px"},
      sm: { max: "640px" }
		},

    letterSpacing : {
      'wider' : '2px',
      'wide' : '1.5px',
      'normal-wide' : '1.3px',
      'normal' : '1.15px'
    },



    extend: {},
  },
  plugins: [],
}

