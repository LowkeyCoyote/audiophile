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
      'black' : '#000000'
    },

    fontSize : {
      'h1' : '56px',
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
      'hero-home-desktop' : "url('/src/assets/home/image-hero-desktop.jpg')",
      'hero-home-tablet' : "url('/src/assets/home/image-hero-tablet.jpg')",
      'hero-home-mobile' : "url('/src/assets/home/image-hero-mobile.jpg')",
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

