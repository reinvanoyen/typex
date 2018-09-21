"use strict";

const util = {
  createTextStyleId(textStyle) {

    let textStyleId = '';

    // Make sure this id incorporates every possible property of the text style

    textStyleId += textStyle.fontFamily;
    textStyleId += '-'+textStyle.fontSize;
    textStyleId += '-'+textStyle.letterSpacing;
    textStyleId += '-'+textStyle.textTransform;

    if (textStyle.lineHeight) {
      textStyleId += '-'+textStyle.lineHeight;
    }

    if (textStyle.color) {
      textStyleId += '-'+textStyle.color.r+'-'+textStyle.color.g+'-'+textStyle.color.b+'-'+textStyle.color.a;
    }

    return textStyleId;
  }
};

export default util;