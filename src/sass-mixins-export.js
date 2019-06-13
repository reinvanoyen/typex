import ui from './util/ui';
import stringUtils from './util/string';
import exportUtils from './util/export';

import openExportDialog from './export/open-export-dialog';

export default function(context) {

  openExportDialog(context, {
    title: 'SASS mixins export',
    informativeText: 'Export each text style as a SASS mixin'
  }, (textStyles, data) => {

    let sass = {};

    textStyles.forEach(textStyle => {
      sass[stringUtils.slugify(textStyle.name)] = exportUtils.createCssProps(textStyle, data);
    });

    let output = '';
    let i = 0;

    for (let identifier in sass) {

      if (sass.hasOwnProperty(identifier)) {

        let mixinName = data.namingPrefix + '-' + (data.namingConvention === 'Numeric' ? i+1 : identifier);

        output += ( i !== 0 ? "\n" : '' ) + '@mixin ' + mixinName + "\n";
        output += '{'+"\n";
        output += exportUtils.createStyleBlock(sass[identifier]);
        output += '}'+"\n";
        i++;
      }
    }

    ui.createSavePanel('typex-mixins.scss', output);
  });
};