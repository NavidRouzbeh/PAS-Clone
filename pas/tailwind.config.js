/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'background-blue' : '#005EEF' ,
        'box-background' : '#A3E1D2CC' ,
        'button-green' : '#008651' ,
        'button-red' : '#EB0000' ,
        'button-yellow' : '#FFC000' ,
      }
    },
  },
  plugins: [],
};
