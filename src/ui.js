const MARGIN = 10;

const LABEL_WIDTH = 150;
const LABEL_HEIGHT = 22;

const FIELD_WIDTH = 50;
const FIELD_HEIGHT = 22;

const SELECT_HEIGHT = 28;
const SELECT_WIDTH = 50;

let currentOffset = 0;

const ui = {
  createLabel: (view, text) => {

    let frame = NSMakeRect(0, currentOffset, LABEL_WIDTH, LABEL_HEIGHT);
    let label = NSTextField.alloc().initWithFrame(frame);

    label.setStringValue(text);
    label.setFont(NSFont.boldSystemFontOfSize(12));
    label.setBezeled(false);
    label.setDrawsBackground(false);
    label.setEditable(false);
    label.setSelectable(false);

    view.addSubview(label);
    // currentOffset = currentOffset + LABEL_HEIGHT;

    return label;
  },
  createField: (view, value, width = FIELD_WIDTH, height = FIELD_HEIGHT) => {

    let frame = NSMakeRect(LABEL_WIDTH, currentOffset, width, height);
    let field = NSTextField.alloc().initWithFrame(frame);
    field.setStringValue(value);

    view.addSubview(field);
    currentOffset = currentOffset + height + MARGIN;

    return field;
  },
  createSelect: (view, options) => {

    let frame = NSMakeRect(LABEL_WIDTH, currentOffset, SELECT_WIDTH, SELECT_HEIGHT);
    let comboBox = NSComboBox.alloc().initWithFrame(frame);

    comboBox.addItemsWithObjectValues(options);
    comboBox.selectItemAtIndex(0);
    comboBox.setNumberOfVisibleItems(16);
    comboBox.setCompletes(1);

    view.addSubview(comboBox);
    currentOffset = currentOffset + SELECT_HEIGHT + MARGIN;

    return comboBox;
  },
  getCurrentOffset: () => {
    return currentOffset;
  }
};

export default ui;