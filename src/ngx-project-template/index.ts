import { externalSchematic, Rule } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function ngxProjectTemplate(_options: any): Rule {
    const name = _options.name;
    console.log('The name of the repo will be', name);

    return () =>
        externalSchematic('@schematics/angular', 'ng-new', {
            name,
            directory: name,
            version: '14.0.0',
            style: 'scss',
            createApplication: false,
            packageManager: 'yarn',
        });
}
