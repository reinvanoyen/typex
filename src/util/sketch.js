"use strict";

const sketch = {
  getTextStyles(context) {

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
      textStyle.fontFamily = String(rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontNameAttribute));
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

    return textStyles;
  }
};

export default sketch;