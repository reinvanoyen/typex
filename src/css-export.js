import ui from './util/ui';
import stringUtils from './util/string';
import exportUtils from './util/export';

import openExportDialog from './export/open-export-dialog';

export default function(context) {

  openExportDialog(context, {
    title: 'CSS classes export',
    informativeText: 'Export each text style as a class'
  }, (textStyles, data) => {

    let css = {};

    textStyles.forEach(textStyle => {
      css[stringUtils.slugify(textStyle.name)] = exportUtils.createCssProps(textStyle, data);
    });

    let output = '';
    let i = 0;

    for (let identifier in css) {
      if (css.hasOwnProperty(identifier)) {

        let className = data.namingPrefix + '-' + (data.namingConvention === 'Numeric' ? i+1 : identifier);

        output += ( i !== 0 ? "\n" : '' ) + '.' + className + "\n";
        output += '{'+"\n";
        output += exportUtils.createStyleBlock(css[identifier]);
        output += '}'+"\n";
        i++;
      }
    }

    ui.createSavePanel('typex-stylesheet.css', output);
  });
};