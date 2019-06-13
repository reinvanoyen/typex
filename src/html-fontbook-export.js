import ui from './util/ui';
import exportUtils from './util/export';
import openExportDialog from "./export/open-export-dialog";

export default function(context) {

  openExportDialog(context, {
    title: 'Create HTML fontbook',
    informativeText: 'Create a handy HTML fontbook from your text styles',
    confirmBtnText: 'Export HTML fontbook'
  }, (textStyles, data) => {

    // Create a HTML fontbook with these styles
    let html = exportUtils.createHtmlFontbook(textStyles, data);

    // Ask the user to save the file
    ui.createSavePanel('typex-fontbook.html', html);
  });
};