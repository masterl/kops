define(['knockout', 'text!./home.html'],
  (ko, template) => {
    class ViewModel {
      constructor (something) {
        this.something = something;
      }
    }

    return { ViewModel, template };
  }
);
