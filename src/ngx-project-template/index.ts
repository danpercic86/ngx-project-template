import { apply, applyTemplates, MergeStrategy, mergeWith, Rule, url } from '@angular-devkit/schematics';

interface Options {
    readonly name: string;
}

export function ngxProjectTemplate(options: Options): Rule {
    console.log(options);

    const templateSource = apply(url('./files'), [applyTemplates({ name: options.name })]);

    return mergeWith(templateSource, MergeStrategy.Overwrite);
}
