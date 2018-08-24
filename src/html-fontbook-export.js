import uiUtils from './util/ui';
import exportUtils from './util/export';
import sketchUtils from './util/sketch';

export default function(context) {

  // Open the settings window
  uiUtils.createHtmlFontbookExportSettingsWindow(context, (opts) => {

    // Get the text styles from the Sketch document
    let textStyles = sketchUtils.getTextStyles(context);

    // Create a HTML fontbook with these styles
    let html = exportUtils.createHtmlFontbook(textStyles, opts);

    // Ask the user to save the file
    uiUtils.createSavePanel('typex-fontbook.html', html);
  });
};