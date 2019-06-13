import ui from './util/ui';
import stringUtils from './util/string';
import exportUtils from './util/export';

import openExportDialog from './export/open-export-dialog';

export default function(context) {

  openExportDialog(context, {
    title: 'JSON export',
    informativeText: 'Export text styles in JSON format'
  }, (textStyles, data) => {

    // Export as JSON
    let textStyleJson = {};

    textStyles.forEach((textStyle, i) => {

      let textStyleIdentifier = stringUtils.slugify(textStyle.name);
      let stylePropertyNaming = data.namingPrefix + '-' + (data.namingConvention === 'Numeric' ? (i+1) : textStyleIdentifier);

      textStyleJson[stylePropertyNaming] = exportUtils.createCssProps(textStyle, data);
    });

    // Ask the user to save the file
    ui.createSavePanel('typex-text-styles.json', JSON.stringify(textStyleJson));
  });
};