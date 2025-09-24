// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx}"  // SolidJS/Vite will look here
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // enables dark mode with "dark" class
  theme: {
    extend: {},
  },
  plugins: [],
};