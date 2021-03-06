"use strict";

const ui = {
  createSavePanel(defaultFileName, contents) {

    let save = NSSavePanel.savePanel();

    save.setNameFieldStringValue(defaultFileName);
    save.setAllowsOtherFileTypes(false);
    save.setExtensionHidden(false);

    if (save.runModal()) {

      let file = NSString.stringWithString(contents);
      let path = save.URL().path();

      file.writeToFile_atomically_encoding_error(path, true, NSUTF8StringEncoding, null);
    }
  },
  createLabel: (text = '') => {

    let label = NSTextField.alloc().init();

    label.setStringValue(text);
    label.setFont(NSFont.boldSystemFontOfSize(12));
    label.setBezeled(false);
    label.setDrawsBackground(false);
    label.setEditable(false);
    label.setSelectable(false);

    return label;
  },
  createTextField(value) {

    let field = NSTextField.alloc().init();

    field.setStringValue(value);

    return field;
  },
  createSelect: (options) => {

    let comboBox = NSPopUpButton.alloc().init();

    comboBox.addItemsWithTitles(options);
    comboBox.selectItemAtIndex(0);

    return comboBox;
  },
  createStepper: (value) => {

    let stepper = NSStepper.alloc().init();
    return stepper;
  },
  createCheckbox: (title) => {

    let checkbox = NSButton.alloc().init();
    checkbox.setButtonType(NSSwitchButton);
    checkbox.title = title;
    return checkbox;
  },
  createSettingsDialog(context, opts = {}, components, cb) {

    opts.title = opts.title || 'Alert';
    opts.informativeText = opts.informativeText || '';
    opts.cancelBtnText = opts.cancelBtnText || 'Cancel';
    opts.confirmBtnText = opts.confirmBtnText || 'Ok';

    let dialog = NSAlert.alloc().init();
    let dialogIconPath = context.plugin.urlForResourceNamed('icon.png').path();
    let dialogIcon = NSImage.alloc().initByReferencingFile(dialogIconPath);

    dialog.setIcon(dialogIcon);
    dialog.setMessageText(opts.title);
    dialog.setInformativeText(opts.informativeText);

    let btnConfirm = dialog.addButtonWithTitle(opts.confirmBtnText);
    let btnCancel = dialog.addButtonWithTitle(opts.cancelBtnText);

    // Create grid view
    let gridView = NSGridView.alloc().init();

    // Create object to hold all inputs
    let inputs = {};
    let height = 0;

    let rowSpacing = 8;

    // Loop each component
    components.forEach(c => {

      let label, field;

      switch (c.type) {

        case 'text':

          label = ui.createLabel(c.label);
          field = ui.createTextField(c.value);
          height += 22 + rowSpacing;
          gridView.addRowWithViews([label, field]);

          break;

        case 'stepper':

          label = ui.createLabel(c.label);
          field = ui.createStepper(c.value);
          height += 22 + rowSpacing;
          gridView.addRowWithViews([label, field]);

          break;

        case 'checkbox':

          label = ui.createLabel(c.label);
          field = ui.createCheckbox(c.value);
          height += 22 + rowSpacing;
          gridView.addRowWithViews([label, field]);

          break;

        case 'multicheckbox':

          field = [];

          c.values.forEach((v, i) => {

            label = (i ? ui.createLabel() : ui.createLabel(c.label));

            let checkbox = ui.createCheckbox(v);
            height += 22 + rowSpacing;

            field.push(checkbox);
            gridView.addRowWithViews([label, checkbox]);
          });

          break;

        case 'select':

          label = ui.createLabel(c.label);
          field = ui.createSelect(c.options);
          height += 28 + rowSpacing;
          gridView.addRowWithViews([label, field]);

          break;
      }

      inputs[c.id] = field;
    });

    // Set grid view as view of dialog
    dialog.accessoryView = gridView;

    gridView.columnSpacing = 30;
    gridView.rowSpacing = rowSpacing;
    gridView.frame = NSMakeRect(0, 0, 400, height);

    // Open the dialog and store the response code
    let responseCode = dialog.runModal();

    // The dialog is being 'submitted'
    if (responseCode === 1000) {

      let data = {};

      components.forEach(c => {

        switch (c.type) {
          case 'text':
            data[c.id] = inputs[c.id].stringValue();
            break;
          case 'select':
            data[c.id] = c.options[inputs[c.id].indexOfSelectedItem()];
            break;
          case 'checkbox':
            data[c.id] = (inputs[c.id].state() === 1);
            break;

          case 'multicheckbox':
            let values = {};

            c.values.forEach((v, i) => {
              values[v] = ( inputs[c.id][i].state() === 1 );
            });

            data[c.id] = values;
        }
      });

      cb(data);
      return;
    }

    return dialog;
  }
};

export default ui;