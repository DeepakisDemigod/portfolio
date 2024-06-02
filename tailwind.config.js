/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        /*'custom-gradient': 'linear-gradient(to right, #00bf8f 0%, #001510 51%, #00bf8f 100%)',*/
        'custom-gradient': 'radial-gradient(circle, rgba(0,191,143,1) 0%, rgba(0,21,24,1) 51%, rgba(0,191,143,1) 100%)'
      }
    }
  }
};
