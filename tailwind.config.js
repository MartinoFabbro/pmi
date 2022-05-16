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
};
