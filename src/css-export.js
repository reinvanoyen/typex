import ui from './util/ui';
import stringUtils from './util/string';
import exportUtils from './util/export';
import sketchUtils from './util/sketch';

export default function(context) {

  ui.createSettingsDialog(context, {
    title: 'CSS classes export',
    informativeText: 'Export each text style as a class, ready to be used in your HTML-files'
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
      options: [
        'px',
        'em',
        'rem'
      ],
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
      id: 'classNamingPrefix',
      value: 'type',
      label: 'Class naming prefix'
    },
    {
      type: 'select',
      id: 'classNamingConvention',
      options: [
        'Numeric',
        'Text style name'
      ],
      label: 'Class naming convention'
    }
  ], (data) => {

    data.classNamingConvention = data.classNamingConvention || 'Numeric';

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

    let css = {};

    textStyles.forEach(textStyle => {
      css[stringUtils.slugify(textStyle.name)] = exportUtils.createCssProps(textStyle, data);
    });

    let output = '';
    let i = 0;

    for (let identifier in css) {

      let className = data.classNamingPrefix + '-' + (data.classNamingConvention === 'Numeric' ? i+1 : identifier);

      output += ( i !== 0 ? "\n" : '' ) + '.' + className + "\n";
      output += '{'+"\n";
      output += exportUtils.createStyleBlock(css[identifier]);
      output += '}'+"\n";
      i++;
    }

    ui.createSavePanel('typex-stylesheet.css', output);
  });
};