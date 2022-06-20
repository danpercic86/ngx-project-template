import { apply, applyTemplates, MergeStrategy, mergeWith, move, Rule, strings, url } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { normalize } from '@angular-devkit/core';

export interface Options {
    readonly name: string;
    readonly path?: string;
}

function getNodeInstallTask(options: Options) {
    return new NodePackageInstallTask({
        packageManager: 'yarn',
        workingDirectory: options.path ? normalize(options.path).toString() : '.',
    });
}

export function ngNew(options: Options): Rule {
    const templateRules = [applyTemplates({ name: options.name, ...strings })];
    if (options.path) {
        templateRules.push(move(normalize(options.path)));
    }

    const templateSource = apply(url('./files'), templateRules);

    return (tree, context) => {
        context.addTask(getNodeInstallTask(options));
        return mergeWith(templateSource, MergeStrategy.Overwrite)(tree, context);
    };
}
