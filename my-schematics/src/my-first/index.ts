import {
  // apply,
  chain,
  // mergeWith,
  // renameTemplateFiles,
  Rule,
  // SchematicContext,
  // Tree,
  // url,
} from "@angular-devkit/schematics";
// import { readFileSync } from "fs";
import { buildComponent } from "@angular/cdk/schematics";
import { Schema as ComponentSchema } from "@schematics/angular/component/schema";

export function myFirst(_options: ComponentSchema): Rule {
  // return (tree: Tree, _context: SchematicContext) => {
  // const jsonFormConfig = readFileSync(_options.config);
  // const jsonFormContent = jsonFormConfig.toString();
  // const jsonForm = JSON.parse(jsonFormContent);

  console.log(_options);
  return chain([
    buildComponent(
      { ..._options },
      {
        template: "./__path__/__name@classify__/__name@classify__.js.template",
        style: "./__path__/__name@classify__/__name@classify__.scss.template",
      }
    ),
  ]);

  // console.log(jsonForm);

  // console.log(_options);

  // const templateSource = apply(url("./templates/forms"), [
  // renameTemplateFiles(),
  // ]);

  // tree.create(_options.name || "hello", jsonFormContent);
  // return chain([mergeWith(templateSource)])(tree, _context);
  // };
}
