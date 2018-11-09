"use strict";

import util from './util';
import numberUtils from './number';

const exportUtils = {
  sortTextStyles(textStyles) {

    // Sort text styles by size
    textStyles.sort((a, b) => {
      return a.fontSize - b.fontSize;
    });

    return textStyles;
  },
  excludeTextStyleProperties(textStyles, excludedProps = []) {

    textStyles.forEach(textStyle => {
      excludedProps.forEach(prop => {
        if (textStyle[prop]) {
          delete textStyle[prop];
        }
      });
    });

    return textStyles;
  },
  removeDoubleTextStyles(textStyles) {

    let uniqueTextStyles = {};
    let filtered = [];

    textStyles.forEach((textStyle, i) => {

      let id = util.createTextStyleId(textStyle);

      if (! uniqueTextStyles[id]) {
        uniqueTextStyles[id] = true;
        filtered.push(textStyle);
      }
    });

    return filtered;
  },
  createCssProps(textStyle, opts = {}) {

    opts.cssUnit = opts.cssUnit || 'px';
    opts.scalingFactor = opts.scalingFactor || 1;
    opts.maxDecimalPlaces = opts.maxDecimalPlaces || 2;

    let cssProps = {};

    cssProps['font-family'] = textStyle.fontFamily;
    cssProps['font-weight'] = 400;
    cssProps['text-transform'] = 'none';

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

    cssProps['font-size'] = numberUtils.parseFloatMaxDecimal(opts.scalingFactor * textStyle.fontSize, opts.maxDecimalPlaces)+opts.cssUnit;
    cssProps['letter-spacing'] = numberUtils.parseFloatMaxDecimal(opts.scalingFactor * textStyle.letterSpacing, opts.maxDecimalPlaces)+opts.cssUnit;

    if (textStyle.textTransform === 1) {
      cssProps['text-transform'] = 'uppercase';
    }

    if (textStyle.textTransform === 2) {
      cssProps['text-transform'] = 'lowercase';
    }

    if (textStyle.lineHeight) {
      cssProps['line-height'] = numberUtils.parseFloatMaxDecimal(1 + (textStyle.lineHeight - textStyle.fontSize) / textStyle.lineHeight, opts.maxDecimalPlaces);
    }

    if (textStyle.color) {
      cssProps['color'] = exportUtils.createRgbaString(textStyle.color);
    }

    return cssProps;
  },
  createRgbaString(colorObj) {
    return 'rgba('+exportUtils.createColorValue(colorObj.r)+','+exportUtils.createColorValue(colorObj.g)+','+exportUtils.createColorValue(colorObj.b)+','+colorObj.a+')';
  },
  createColorValue(normalizedValue) {
    return Math.round(normalizedValue * 255);
  },
  createStyleBlock(cssProps) {

    let output = '';

    for (let prop in cssProps) {
      output += "\t"+prop+': '+cssProps[prop]+';'+"\n";
    }

    return output;
  },
  createInlineStyleString(cssProps) {

    let styleString = '';

    for (let prop in cssProps) {
      styleString += prop + ': ' + cssProps[prop] +'; ';
    }

    return styleString;
  },
  createHtmlFontbook(textStyles, opts = {}) {

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

      let textStyleId = util.createTextStyleId(textStyle);
      let cssProps = exportUtils.createCssProps(textStyle, opts);
      let inlineStyleString = exportUtils.createInlineStyleString(cssProps);
      let textStyleName;

      if (opts.textStyleNamingConvention === 'Numeric') {
        textStyleName = opts.textStyleNamingPrefix + ' ' + (i+1);
      } else if (opts.textStyleNamingConvention === 'Text style name') {
        textStyleName = opts.textStyleNamingPrefix + ' ' + textStyle.name;
      } else {
        textStyleName = opts.textStyleNamingPrefix + ' ' + (i+1) + ' ('+textStyle.name+')';
      }

      output += `
        <div style="box-shadow: 0 5px 15px #f0f0f0; padding: 25px 50px; border-bottom: 1px solid #ccc;">
          <div style="font-family: Helvetica, Arial, Sans-Serif; font-size: 14px; margin-bottom: 15px;">
            <span>${i+1}.</span>
            <span>
              ${textStyleName}
            </span>
            <span style="color: #ccc;">
              ${inlineStyleString}
            </span>
          </div>
          <div style="${inlineStyleString};">${opts.previewText}</div>
        </div>
      `;
    });

    output += `
      </body>
      </html>
    `;

    return output;
  }
};

export default exportUtils;