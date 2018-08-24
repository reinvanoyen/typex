import uiUtils from './util/ui';
import stringUtils from './util/string';
import exportUtils from './util/export';
import sketchUtils from './util/sketch';

export default function(context) {

  // Open the settings window
  uiUtils.createSassExportSettingsWindow(context, (opts) => {

    opts.namingPrefix = opts.namingPrefix || 'type';
    opts.namingConvention = opts.namingConvention || 'Numeric';

    // Get the text styles from the Sketch document
    let textStyles = sketchUtils.getTextStyles(context);

    let sass = {};

    textStyles.forEach(textStyle => {
      sass[stringUtils.slugify(textStyle.name)] = exportUtils.createCssProps(textStyle, opts);
    });

    let output = '';
    let i = 0;

    for (let identifier in sass) {

      let mixinName = opts.namingPrefix + '-' + ( opts.namingConvention === 'Numeric' ? i+1 : identifier );

      output += ( i !== 0 ? "\n" : '' ) + '@mixin ' + mixinName + "\n";
      output += '{'+"\n";

      for (let prop in sass[identifier]) {
        output += "\t"+prop+': '+sass[identifier][prop]+';'+"\n";
      }

      output += '}'+"\n";
      i++;
    }

    // Ask the user to save the file
    uiUtils.createSavePanel('typex-mixins.scss', output);
  });
};