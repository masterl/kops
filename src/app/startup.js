define(['knockout', './router'],
  (ko, router) => {
    const components_names = [
      'home'
    ];

    components_names.map(component_name => {
      ko.components.register(component_name, { require: `components/${component_name}/${component_name}` });
    });

    router.start();

    ko.applyBindings({ current_route: router.current_route });
  }
);
