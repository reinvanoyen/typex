import ui from './util/ui';
import exportUtils from './util/export';
import sketchUtils from './util/sketch';

export default function(context) {


  ui.createSettingsDialog(context, {
    title: 'Create HTML fontbook',
    informativeText: 'Create a handy HTML fontbook from your text styles',
    confirmBtnText: 'Export HTML fontbook'
  }, [
    {
      type: 'select',
      id: 'cssUnit',
      options: ['px', 'em', 'rem'],
      label: 'Css unit'
    },
    {
      type: 'text',
      id: 'scalingFactor',
      value: 1,
      label: 'Size scaling factor'
    },
    {
      type: 'text',
      id: 'maxDecimalPlaces',
      value: 2,
      label: 'Maximal decimal places'
    },
    {
      type: 'text',
      id: 'textStyleNamingPrefix',
      value: 'type',
      label: 'Text style naming prefix'
    },
    {
      type: 'select',
      id: 'textStyleNamingConvention',
      options: ['Numeric', 'Text style name'],
      label: 'Text style naming convention'
    },
    {
      type: 'text',
      id: 'previewText',
      value: 'The quick brown fox jumps over the lazy dog',
      label: 'Preview text'
    }
  ], (data) => {

    // Get the text styles from the Sketch document
    let textStyles = sketchUtils.getTextStyles(context);
    textStyles = exportUtils.sortTextStyles(textStyles);

    // Create a HTML fontbook with these styles
    let html = exportUtils.createHtmlFontbook(textStyles, data);

    // Ask the user to save the file
    ui.createSavePanel('typex-fontbook.html', html);
  });
};