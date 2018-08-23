import ui from './ui';

export default function(context) {
  createExportSettingsWindow(context, exportOpts => {
    createSavePanel(context, exportOpts);
  });
};

let uniqueTextStyles = {};

function parseTextStyles(context) {

  let texts = context.document.documentData().layerTextStyles().objects();
  let rawTextStyles = [];

  texts.forEach((text, i) => {

    rawTextStyles.push({
      attributes: text.style().textStyle().attributes(),
      textStyle: text,
      name: text.name()
    });
  });

  let textStyles = [];

  rawTextStyles.forEach(rawTextStyle => {

    let textStyle = {};

    textStyle.name = rawTextStyle.name;
    textStyle.fontFamily = rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontNameAttribute);
    textStyle.fontSize = rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontSizeAttribute);
    textStyle.paragraph = rawTextStyle.attributes.NSParagraphStyle;

    if (textStyle.paragraph) {
      textStyle.lineHeight = textStyle.paragraph.maximumLineHeight();
    }

    textStyle.letterSpacing = rawTextStyle.attributes.NSKern || 0;
    textStyle.textTransform = parseInt(rawTextStyle.attributes.MSAttributedStringTextTransformAttribute || 0);

    // @TODO strikethrough & underline, or is this not needed?

    textStyles.push(textStyle);
  });

  // Sort text styles by size
  textStyles.sort((a, b) => {
    return a.fontSize - b.fontSize;
  });

  return textStyles;
}

function createTextStyleId(textStyle) {

  let textStyleId = '';

  // Make sure this id incorporates every possible property of the text style
  textStyleId += textStyle.fontFamily;
  textStyleId += '-'+textStyle.fontSize;
  textStyleId += '-'+textStyle.lineHeight;
  textStyleId += '-'+textStyle.letterSpacing;
  textStyleId += '-'+textStyle.textTransform;

  return textStyleId;
}

function createCssProps(textStyle, exportOpts = {}) {

  exportOpts.cssUnit = exportOpts.cssUnit || 'px';
  exportOpts.scalingFactor = exportOpts.scalingFactor || 1;

  let cssProps = {};

  cssProps['font-family'] = textStyle.fontFamily;
  cssProps['font-weight'] = 400;
  cssProps['line-height'] = 1;

  let fontParts = textStyle.fontFamily.split('-');

  let fontWeightMap = {
    'Thin': 100,
    'Light': 300,
    'Regular': 400,
    'Medium': 500,
    'Bold': 700,
    'Black': 900
  };

  if (fontParts[1] && fontWeightMap[fontParts[1]]) {
    cssProps['font-family'] = fontParts[0];
    cssProps['font-weight'] = fontWeightMap[fontParts[1]];
  }

  cssProps['font-size'] = (exportOpts.scalingFactor * textStyle.fontSize) + exportOpts.cssUnit;
  cssProps['letter-spacing'] = (exportOpts.scalingFactor * textStyle.letterSpacing) + exportOpts.cssUnit;

  if (textStyle.textTransform === 1) {
    cssProps['text-transform'] = 'uppercase';
  }

  if (textStyle.textTransform === 2) {
    cssProps['text-transform'] = 'lowercase';
  }

  if (textStyle.lineHeight) {
    cssProps['line-height'] = parseFloat(1 + (textStyle.lineHeight - textStyle.fontSize) / textStyle.lineHeight).toFixed(2);
  }

  return cssProps;
}

function createHtml(textStyles, exportOpts = {}) {

  let output = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Typex text styles</title>
    </head>
    <body style="padding: 0; margin: 0;">
  `;

  textStyles.forEach((textStyle, i) => {

    let uniqueId = createTextStyleId(textStyle);

    if (! uniqueTextStyles[uniqueId]) {

      let cssProps = createCssProps(textStyle, exportOpts);
      let inlineStyleString = createInlineStyleString(cssProps);

      output += `
        <div style="box-shadow: 0 5px 15px #f0f0f0; padding: 25px 50px; border-bottom: 1px solid #ccc;">
          <div style="font-family: Helvetica, Arial, Sans-Serif; font-size: 14px; margin-bottom: 15px;">
            <span>${i+1}.</span>
            <span>
              ${textStyle.name}
            </span>
            <span style="color: #ccc;">
              ${inlineStyleString}
            </span>
          </div>
          <div style="${inlineStyleString};">${exportOpts.previewText}</div>
        </div>
      `;

      // Add the id to the stack of text styles we've already exported
      uniqueTextStyles[uniqueId] = true;
    }
  });

  output += `
    </body>
    </html>
   `;

  return output;
}

function createInlineStyleString(cssProps) {

  let styleString = '';

  for (let prop in cssProps) {
    styleString += prop + ': ' + cssProps[prop] +'; ';
  }

  return styleString;
}

function createExportSettingsWindow(context, cb) {

  let cssUnits = ['px', 'em', 'rem'];

  let alert = NSAlert.alloc().init();
  let view = NSView.alloc().init();

  let alertIconPath = context.plugin.urlForResourceNamed('icon.png').path();
  let alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath);
  alert.setIcon(alertIcon);

  alert.setMessageText('Typex');
  alert.setInformativeText('Export your text styles to web');

  let labelPreviewText = ui.createLabel(view, 'Preview text');
  let fieldPreviewText = ui.createField(view, 'The quick brown fox jumps over the lazy dog', 200, 75);

  let labelScalingFactor = ui.createLabel(view, 'Scaling factor');
  let fieldScalingFactor = ui.createField(view, '1');

  let labelCssUnit = ui.createLabel(view, 'CSS unit');
  let selectCssUnit = ui.createSelect(view, cssUnits);

  let btnExport = alert.addButtonWithTitle('Export');
  let btnCancel = alert.addButtonWithTitle('Cancel');

  view.frame = NSMakeRect(0, 0, 400, ui.getCurrentOffset());
  alert.accessoryView = view;

  let responseCode = alert.runModal();

  if (responseCode === 1000) {

    let exportOpts = {
      cssUnit: cssUnits[selectCssUnit.indexOfSelectedItem()],
      scalingFactor: parseFloat(fieldScalingFactor.stringValue().replace(',', '.')),
      previewText: fieldPreviewText.stringValue()
    };

    cb(exportOpts);
  }
}

function createSavePanel(context, exportOpts = {}) {

  let save = NSSavePanel.savePanel();
  save.setNameFieldStringValue('typex-text-styles.html');
  save.setAllowsOtherFileTypes(false);
  save.setExtensionHidden(false);

  if (save.runModal()) {

    let html = createHtml(parseTextStyles(context), exportOpts);

    let file = NSString.stringWithString(html);
    let path = save.URL().path();

    file.writeToFile_atomically_encoding_error(path, true, NSUTF8StringEncoding, null);

    context.document.showMessage('File saved!');
  }
}