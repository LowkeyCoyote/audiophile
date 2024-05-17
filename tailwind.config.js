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
      'h1-desktop' : '58px',
      'h1-mobile' : '36px',
      'h2' : '40px',
      'h2-mobile' : '28px',
      'h3' : '32px',
      'h3-mobile': '24px',
      'h4' : '28px',
      'h5' : '24px',
      'h6' : '18px',
      'overline' : '14px',
      'overline-tablet' : '12px',
      'subtitle' : '13px',
      'p' : '15px',
    },
    lineHeight : {
      'h1' : '58px',
      'h2' : '44px',
      'h3' : '36px',
      'h4' : '38px',
      'h5' : '33px',
      'h6' : '24px',
      'overline' : '19px',
      'subtitle' : '25px',
      'p' : '25px',
      '5' : '25px',
      '4' :'24px',
      'h1-mobile' : '44px'

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
      'h1' : '2px',
      'h1-mobile' : '1.3px', 
      'h2' : '1.5px',
      'h2-mobile' : '1px',
      'h3' : '1.15px',
      'h3-mobile' : '0.9px',
      'h4' : '2px',
      'h5' : '1.7px',
      'h6' : '1.3px',
      'overline' : '10px',
      'overline-tablet' : '8.5px',
      'subtitle' : '1px',
      'normal' : '0px'
    },
  
    extend: {},
  },
  plugins: [],
}

