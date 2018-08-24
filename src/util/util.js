"use strict";

const util = {
  createTextStyleId(textStyle) {

    let textStyleId = '';

    // Make sure this id incorporates every possible property of the text style
    textStyleId += textStyle.fontFamily;
    textStyleId += '-'+textStyle.fontSize;
    textStyleId += '-'+textStyle.lineHeight;
    textStyleId += '-'+textStyle.letterSpacing;
    textStyleId += '-'+textStyle.textTransform;

    return textStyleId;
  }
};

export default util;