import ko from 'knockout';
import template from './login.pug';

class LoginModel {
  constructor (router) {
    this.router = router;

    this.email = ko.observable('');
    this.password = ko.observable('');
  }

  login () {
    // check login

    this.router.redirect_to('home');
  }
}

export default { viewModel: LoginModel, template };
