import ui from './util/ui';
import exportUtils from './util/export';
import sketchUtils from './util/sketch';

export default function(context) {

  ui.createSettingsDialog(context, {
    title: 'JSON export',
    informativeText: 'Export text styles as a JSON file (in development)',
    confirmBtnText: 'Export as JSON'
  }, [
  ], (data) => {

    // Get the text styles from the Sketch document
    let textStyles = sketchUtils.getTextStyles(context);
    textStyles = exportUtils.sortTextStyles(textStyles);
    textStyles = exportUtils.removeDoubleTextStyles(textStyles);

    let css = [];

    textStyles.forEach(textStyle => {
      css.push(exportUtils.createCssProps(textStyle));
    });

    // Ask the user to save the file
    ui.createSavePanel('typex-text-styles.json', JSON.stringify(css));
  });
};