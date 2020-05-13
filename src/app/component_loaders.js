import path from 'path';

const filename_without_extension = filepath =>
{
    return path.basename(filepath, '.js');
};

export function list_components ()
{
    const require_component = require.context(
        '../components', // The relative path of the components folder
        true,            // check subfolders?
        /\w+\.js$/       // Filename regular expresion
    );

    const components = [];

    require_component.keys().forEach(file_name =>
    {
        const component_config = require_component(file_name);

        components.push({
            name:   filename_without_extension(file_name),
            config: component_config.default || component_config
        });
    });

    return components;
}
