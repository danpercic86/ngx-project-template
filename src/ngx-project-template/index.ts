import {externalSchematic, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngxProjectTemplate(_options: any): Rule {
    const name = _options.name
    console.log('The name of the repo will be', name)

    return (_: Tree, _context: SchematicContext) => {
        return externalSchematic('@schematics/angular', 'ng-new', {
            name,
            version: '9.0.0',
            directory: name,
            routing: false,
            style: 'scss',
            inlineStyle: false,
            inlineTemplate: false,
            createApplication: false,
        });
    };
}
