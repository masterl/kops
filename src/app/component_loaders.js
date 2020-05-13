import path from 'path';

export function list_components ()
{
    const require_component = require.context(
        '../components', // The relative path of the components folder
        true,            // check subfolders?
        /\w+\.js$/       // Filename regular expresion
    );

    const components = require_component.keys()
        .map(file_path =>
        {
            const component_config = require_component(file_path);

            return {
                name:   path.basename(file_path, '.js'),
                config: component_config.default || component_config
            };
        });

    return components;
}
