import { apply, applyTemplates, MergeStrategy, mergeWith, move, Rule, strings, url } from '@angular-devkit/schematics';
import { Options } from './types';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { normalize } from '@angular-devkit/core';

export function ngxProjectTemplate(options: Options): Rule {
    console.log(options);

    const templateRules = [applyTemplates({ name: options.name, ...strings })];
    if (options.path) {
        templateRules.push(move(normalize(options.path)));
    }

    const templateSource = apply(url('./files'), templateRules);

    return (tree, context) => {
        context.addTask(new NodePackageInstallTask());
        return mergeWith(templateSource, MergeStrategy.Overwrite)(tree, context);
    };
}
