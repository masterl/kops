import ko from 'knockout';
import './bindings';
import { list_components } from './component_loaders';
import router              from './router';

list_components().forEach(component =>
{
    ko.components.register(
        component.name,
        component.config
    );
});

router.start();

ko.applyBindings({
    current_route: router.current_route
});
