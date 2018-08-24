import uiUtils from './util/ui';
import exportUtils from './util/export';
import sketchUtils from './util/sketch';

export default function(context) {

  // Get the text styles from the Sketch document
  let textStyles = sketchUtils.getTextStyles(context);

  let css = [];

  textStyles.forEach(textStyle => {
    css.push(exportUtils.createCssProps(textStyle));
  });

  // Ask the user to save the file
  uiUtils.createSavePanel('typex-text-styles.json', JSON.stringify(css));
};