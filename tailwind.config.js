/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require('@tailwindcss/forms'),],
  content: ["./views/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'marcellus': ['Marcellus', 'serif'],
      },  
  },
  };
};
