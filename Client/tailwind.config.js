/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.{js,jsx,ts,tsx}"],
  theme: { 
    
    
    colors:
    {
      brown:"#231709",
   green:"#3e673b",
   peach:"#f5b999",
   //peach:"#FFBE98",
   lightpeach:"#f7d5c1",
   //green : '#547A2B',
    white : '#ffffff',
    black : '#000000',
    gray : 'rgba(58, 58, 58, .9)',
    darkGray : 'rgba(58, 58, 58, .6)',
  lightgreen:'#6d7d5c'},

    
    fontFamily:{
         sans:['Poppins','sans-serif']
        },

    screens:{
      sm:'480px',
      md:"768px",
      lg:"976px",
      xl:"1440px"
   } ,
   fontSize:{
    h1:'40px',
    h3:'25px'
   }
    },  
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },
    
    extend: {},

  plugins: [
    require('flowbite/plugin')
  ],
}