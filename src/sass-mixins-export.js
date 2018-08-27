import ui from './util/ui';
import stringUtils from './util/string';
import exportUtils from './util/export';
import sketchUtils from './util/sketch';

export default function(context) {

  ui.createSettingsDialog(context, {
    title: 'SASS mixins export',
    informativeText: 'Export each text style as a SASS mixin'
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
      id: 'mixinNamingPrefix',
      value: 'type',
      label: 'Mixin naming prefix'
    },
    {
      type: 'select',
      id: 'mixinNamingConvention',
      options: ['Numeric', 'Text style name'],
      label: 'Mixin naming convention'
    }
  ], (data) => {

    data.mixinNamingConvention = data.mixinNamingConvention || 'Numeric';

    // Get the text styles from the Sketch document
    let textStyles = sketchUtils.getTextStyles(context);
    textStyles = exportUtils.sortTextStyles(textStyles);
    textStyles = exportUtils.removeDoubleTextStyles(textStyles);

    let sass = {};

    textStyles.forEach(textStyle => {
      sass[stringUtils.slugify(textStyle.name)] = exportUtils.createCssProps(textStyle, data);
    });

    let output = '';
    let i = 0;

    for (let identifier in sass) {

      let mixinName = data.mixinNamingPrefix + '-' + (data.mixinNamingConvention === 'Numeric' ? i+1 : identifier);

      output += ( i !== 0 ? "\n" : '' ) + '@mixin ' + mixinName + "\n";
      output += '{'+"\n";
      output += exportUtils.createStyleBlock(sass[identifier]);
      output += '}'+"\n";
      i++;
    }

    ui.createSavePanel('typex-mixins.scss', output);
  });
};