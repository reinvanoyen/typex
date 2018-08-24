import uiUtils from './util/ui';
import stringUtils from './util/string';
import exportUtils from './util/export';
import sketchUtils from './util/sketch';

export default function(context) {

  // Get the text styles from the Sketch document
  let textStyles = sketchUtils.getTextStyles(context);

  let css = {};

  textStyles.forEach(textStyle => {
    css[stringUtils.slugify(textStyle.name)] = exportUtils.createCssProps(textStyle);
  });

  let output = '';
  let i = 0;

  for (let identifier in css) {

    output += ( i !== 0 ? "\n" : '' ) + '.type-' + identifier + "\n";
    output += '{'+"\n";

    for (let prop in css[identifier]) {
      output += "\t"+prop+': '+css[identifier][prop]+';'+"\n";
    }

    output += '}'+"\n";
    i++;
  }

  // Ask the user to save the file
  uiUtils.createSavePanel('typex-stylesheet.css', output);
};