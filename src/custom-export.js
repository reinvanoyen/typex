import ui from './util/ui';

import openExportDialog from './export/open-export-dialog';

export default function(context) {

  openExportDialog(context, {
    title: 'Custom script export',
    informativeText: 'Export each text style by using a custom export script in Javascript'
  }, (textStyles, data) => {

    ui.createSettingsDialog(context, {
      title: 'Custom export script',
      informativeText: 'Customize your export by using Javascript'
    }, [
      {
        type: 'text',
        id: 'customScript',
        value: 'console.log(output)',
        label: 'Custom Javascript export'
      }
    ], (customData) => {

      // @TODO
    });
  });
};