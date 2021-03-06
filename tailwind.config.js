module.exports = {
    important: true,
    prefix: '',
    purge: {
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        zIndex: {
          '-10': '-10',
         }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'), require('daisyui'),require ('tw-elements/dist/plugin'), require('flowbite/plugin'),],
  };
