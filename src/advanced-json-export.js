import ui from './util/ui';
import stringUtils from './util/string';
import exportUtils from './util/export';
import sketchUtils from './util/sketch';

export default function(context) {

  ui.createSettingsDialog(context, {
    title: 'JSON export',
    informativeText: 'Export text styles in JSON format'
  }, [
    {
      type: 'multicheckbox',
      id: 'excludeProps',
      label: 'Exclude properties (merges text styles)',
      values: [
        'Color',
        'Line height'
      ]
    },
    {
      type: 'select',
      id: 'cssUnit',
      options: ['No unit','px', 'em', 'rem'],
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
      id: 'propertyNamingPrefix',
      value: 'type',
      label: 'JSON Property naming prefix'
    },
    {
      type: 'select',
      id: 'propertyNamingConvention',
      options: ['Numeric', 'Text style name'],
      label: 'JSON Property naming convention'
    }
  ], (data) => {

    // Defaults
    data.propertyNamingConvention = data.propertyNamingConvention || 'Numeric';
    data.cssUnit = (data.cssUnit === 'No unit' ? 0 : data.cssUnit);

    // First store the properties we should exclude
    let excludeProps = [];
    if (data['excludeProps']['Color']) {
      excludeProps.push('color');
    }

    if (data['excludeProps']['Line height']) {
      excludeProps.push('lineHeight');
    }

    // Get the text styles from the Sketch document
    let textStyles = sketchUtils.getTextStyles(context);
    textStyles = exportUtils.sortTextStyles(textStyles);
    textStyles = exportUtils.excludeTextStyleProperties(textStyles, excludeProps);
    textStyles = exportUtils.removeDoubleTextStyles(textStyles);

    let textStyleJson = {};

    textStyles.forEach((textStyle, i) => {

      let textStyleIdentifier = stringUtils.slugify(textStyle.name);
      let stylePropertyNaming = data.propertyNamingPrefix + '-' + (data.propertyNamingConvention === 'Numeric' ? (i+1) : textStyleIdentifier);

      textStyleJson[stylePropertyNaming] = exportUtils.createCssProps(textStyle, data);
    });

    // Ask the user to save the file
    ui.createSavePanel('typex-text-styles.json', JSON.stringify(textStyleJson));
  });
};