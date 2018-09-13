requirejs.config({
  baseUrl: 'js',
  paths:   {
    knockout: 'vendor/knockout-latest',
    polyfill: 'vendor/polyfill'
  },
  shim: {
    startup: {
      deps: ['polyfill']
    }
  }
});

requirejs(['app/startup']);
