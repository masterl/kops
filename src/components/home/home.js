import template from './home.pug';

class HomeModel {
  constructor (something) {
    this.something = something;
  }
}

export default { viewModel: HomeModel, template };
