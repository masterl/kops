requirejs.config({
  baseUrl: 'js',
  paths:   {
    knockout: 'vendor/knockout-latest',
    polyfill: 'vendor/polyfill',
    text:     'vendor/text'
  },
  shim: {
    startup: {
      deps: ['polyfill']
    }
  }
});

requirejs(['app/startup']);
