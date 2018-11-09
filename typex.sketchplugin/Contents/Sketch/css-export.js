var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/css-export.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css-export.js":
/*!***************************!*\
  !*** ./src/css-export.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/ui */ "./src/util/ui.js");
/* harmony import */ var _util_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/string */ "./src/util/string.js");
/* harmony import */ var _util_export__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/export */ "./src/util/export.js");
/* harmony import */ var _util_sketch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/sketch */ "./src/util/sketch.js");




/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  _util_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSettingsDialog(context, {
    title: 'CSS classes export',
    informativeText: 'Export each text style as a class, ready to be used in your HTML-files'
  }, [{
    type: 'multicheckbox',
    id: 'excludeProps',
    label: 'Exclude properties (merges text styles)',
    values: ['Color', 'Line height']
  }, {
    type: 'select',
    id: 'cssUnit',
    options: ['px', 'em', 'rem'],
    label: 'Css unit'
  }, {
    type: 'text',
    id: 'scalingFactor',
    value: 1,
    label: 'Size scaling factor'
  }, {
    type: 'text',
    id: 'maxDecimalPlaces',
    value: 2,
    label: 'Maximal decimal places'
  }, {
    type: 'text',
    id: 'classNamingPrefix',
    value: 'type',
    label: 'Class naming prefix'
  }, {
    type: 'select',
    id: 'classNamingConvention',
    options: ['Numeric', 'Text style name'],
    label: 'Class naming convention'
  }], function (data) {
    data.classNamingConvention = data.classNamingConvention || 'Numeric'; // First store the properties we should exclude

    var excludeProps = [];

    if (data['excludeProps']['Color']) {
      excludeProps.push('color');
    }

    if (data['excludeProps']['Line height']) {
      excludeProps.push('lineHeight');
    } // Get the text styles from the Sketch document


    var textStyles = _util_sketch__WEBPACK_IMPORTED_MODULE_3__["default"].getTextStyles(context);
    textStyles = _util_export__WEBPACK_IMPORTED_MODULE_2__["default"].sortTextStyles(textStyles);
    textStyles = _util_export__WEBPACK_IMPORTED_MODULE_2__["default"].excludeTextStyleProperties(textStyles, excludeProps);
    textStyles = _util_export__WEBPACK_IMPORTED_MODULE_2__["default"].removeDoubleTextStyles(textStyles);
    var css = {};
    textStyles.forEach(function (textStyle) {
      css[_util_string__WEBPACK_IMPORTED_MODULE_1__["default"].slugify(textStyle.name)] = _util_export__WEBPACK_IMPORTED_MODULE_2__["default"].createCssProps(textStyle, data);
    });
    var output = '';
    var i = 0;

    for (var identifier in css) {
      var className = data.classNamingPrefix + '-' + (data.classNamingConvention === 'Numeric' ? i + 1 : identifier);
      output += (i !== 0 ? "\n" : '') + '.' + className + "\n";
      output += '{' + "\n";
      output += _util_export__WEBPACK_IMPORTED_MODULE_2__["default"].createStyleBlock(css[identifier]);
      output += '}' + "\n";
      i++;
    }

    _util_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSavePanel('typex-stylesheet.css', output);
  });
});
;

/***/ }),

/***/ "./src/util/export.js":
/*!****************************!*\
  !*** ./src/util/export.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util/util.js");
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number */ "./src/util/number.js");




var exportUtils = {
  sortTextStyles: function sortTextStyles(textStyles) {
    // Sort text styles by size
    textStyles.sort(function (a, b) {
      return a.fontSize - b.fontSize;
    });
    return textStyles;
  },
  excludeTextStyleProperties: function excludeTextStyleProperties(textStyles) {
    var excludedProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    textStyles.forEach(function (textStyle) {
      excludedProps.forEach(function (prop) {
        if (textStyle[prop]) {
          delete textStyle[prop];
        }
      });
    });
    return textStyles;
  },
  removeDoubleTextStyles: function removeDoubleTextStyles(textStyles) {
    var uniqueTextStyles = {};
    var filtered = [];
    textStyles.forEach(function (textStyle, i) {
      var id = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createTextStyleId(textStyle);

      if (!uniqueTextStyles[id]) {
        uniqueTextStyles[id] = true;
        filtered.push(textStyle);
      }
    });
    return filtered;
  },
  createCssProps: function createCssProps(textStyle) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    opts.cssUnit = opts.cssUnit || 'px';
    opts.scalingFactor = opts.scalingFactor || 1;
    opts.maxDecimalPlaces = opts.maxDecimalPlaces || 2;
    var cssProps = {};
    cssProps['font-family'] = textStyle.fontFamily;
    cssProps['font-weight'] = 400;
    cssProps['text-transform'] = 'none';
    var fontParts = textStyle.fontFamily.split('-');
    var fontWeightMap = {
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

    cssProps['font-size'] = _number__WEBPACK_IMPORTED_MODULE_1__["default"].parseFloatMaxDecimal(opts.scalingFactor * textStyle.fontSize, opts.maxDecimalPlaces) + opts.cssUnit;
    cssProps['letter-spacing'] = _number__WEBPACK_IMPORTED_MODULE_1__["default"].parseFloatMaxDecimal(opts.scalingFactor * textStyle.letterSpacing, opts.maxDecimalPlaces) + opts.cssUnit;

    if (textStyle.textTransform === 1) {
      cssProps['text-transform'] = 'uppercase';
    }

    if (textStyle.textTransform === 2) {
      cssProps['text-transform'] = 'lowercase';
    }

    if (textStyle.lineHeight) {
      cssProps['line-height'] = _number__WEBPACK_IMPORTED_MODULE_1__["default"].parseFloatMaxDecimal(1 + (textStyle.lineHeight - textStyle.fontSize) / textStyle.lineHeight, opts.maxDecimalPlaces);
    }

    if (textStyle.color) {
      cssProps['color'] = exportUtils.createRgbaString(textStyle.color);
    }

    return cssProps;
  },
  createRgbaString: function createRgbaString(colorObj) {
    return 'rgba(' + exportUtils.createColorValue(colorObj.r) + ',' + exportUtils.createColorValue(colorObj.g) + ',' + exportUtils.createColorValue(colorObj.b) + ',' + colorObj.a + ')';
  },
  createColorValue: function createColorValue(normalizedValue) {
    return Math.round(normalizedValue * 255);
  },
  createStyleBlock: function createStyleBlock(cssProps) {
    var output = '';

    for (var prop in cssProps) {
      output += "\t" + prop + ': ' + cssProps[prop] + ';' + "\n";
    }

    return output;
  },
  createInlineStyleString: function createInlineStyleString(cssProps) {
    var styleString = '';

    for (var prop in cssProps) {
      styleString += prop + ': ' + cssProps[prop] + '; ';
    }

    return styleString;
  },
  createHtmlFontbook: function createHtmlFontbook(textStyles) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var output = "\n      <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <title>Typex text styles</title>\n      </head>\n      <body style=\"padding: 0; margin: 0;\">\n    ";
    textStyles.forEach(function (textStyle, i) {
      var textStyleId = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createTextStyleId(textStyle);
      var cssProps = exportUtils.createCssProps(textStyle, opts);
      var inlineStyleString = exportUtils.createInlineStyleString(cssProps);
      var textStyleName;

      if (opts.textStyleNamingConvention === 'Numeric') {
        textStyleName = opts.textStyleNamingPrefix + ' ' + (i + 1);
      } else if (opts.textStyleNamingConvention === 'Text style name') {
        textStyleName = opts.textStyleNamingPrefix + ' ' + textStyle.name;
      } else {
        textStyleName = opts.textStyleNamingPrefix + ' ' + (i + 1) + ' (' + textStyle.name + ')';
      }

      output += "\n        <div style=\"box-shadow: 0 5px 15px #f0f0f0; padding: 25px 50px; border-bottom: 1px solid #ccc;\">\n          <div style=\"font-family: Helvetica, Arial, Sans-Serif; font-size: 14px; margin-bottom: 15px;\">\n            <span>".concat(i + 1, ".</span>\n            <span>\n              ").concat(textStyleName, "\n            </span>\n            <span style=\"color: #ccc;\">\n              ").concat(inlineStyleString, "\n            </span>\n          </div>\n          <div style=\"").concat(inlineStyleString, ";\">").concat(opts.previewText, "</div>\n        </div>\n      ");
    });
    output += "\n      </body>\n      </html>\n    ";
    return output;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (exportUtils);

/***/ }),

/***/ "./src/util/number.js":
/*!****************************!*\
  !*** ./src/util/number.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var number = {
  parseFloatMaxDecimal: function parseFloatMaxDecimal(number, maxDecimalPlaces) {
    return Number(number.toFixed(maxDecimalPlaces).replace(/[.,]00$/, ''));
  }
};
/* harmony default export */ __webpack_exports__["default"] = (number);

/***/ }),

/***/ "./src/util/sketch.js":
/*!****************************!*\
  !*** ./src/util/sketch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var sketch = {
  getTextStyles: function getTextStyles(context) {
    var texts = context.document.documentData().layerTextStyles().objects();
    var rawTextStyles = [];
    texts.forEach(function (text, i) {
      rawTextStyles.push({
        attributes: text.style().textStyle().attributes(),
        textStyle: text,
        name: text.name()
      });
    });
    var textStyles = [];
    rawTextStyles.forEach(function (rawTextStyle) {
      var textStyle = {};
      textStyle.name = rawTextStyle.name;
      textStyle.fontFamily = String(rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontNameAttribute));
      textStyle.fontSize = rawTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontSizeAttribute);
      textStyle.paragraph = rawTextStyle.attributes.NSParagraphStyle;

      if (textStyle.paragraph) {
        textStyle.lineHeight = textStyle.paragraph.maximumLineHeight();
      }

      var color = rawTextStyle.attributes.MSAttributedStringColorAttribute;

      if (color) {
        var r = color.red();
        var g = color.green();
        var b = color.blue();
        var a = color.alpha();
        textStyle.color = {
          r: r,
          g: g,
          b: b,
          a: a
        };
      }

      textStyle.letterSpacing = rawTextStyle.attributes.NSKern || 0;
      textStyle.textTransform = parseInt(rawTextStyle.attributes.MSAttributedStringTextTransformAttribute || 0); // @TODO strikethrough & underline, or is this not needed?

      textStyles.push(textStyle);
    });
    return textStyles;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sketch);

/***/ }),

/***/ "./src/util/string.js":
/*!****************************!*\
  !*** ./src/util/string.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var string = {
  slugify: function slugify(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim

    str = str.toLowerCase(); // remove accents, swap ñ for n, etc

    var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaeeeeiiiioooouuuunc------';

    for (var i = 0, l = from.length; i < l; i++) {
      str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }

    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes
    ;
    return str;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (string);

/***/ }),

/***/ "./src/util/ui.js":
/*!************************!*\
  !*** ./src/util/ui.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var ui = {
  createSavePanel: function createSavePanel(defaultFileName, contents) {
    var save = NSSavePanel.savePanel();
    save.setNameFieldStringValue(defaultFileName);
    save.setAllowsOtherFileTypes(false);
    save.setExtensionHidden(false);

    if (save.runModal()) {
      var file = NSString.stringWithString(contents);
      var path = save.URL().path();
      file.writeToFile_atomically_encoding_error(path, true, NSUTF8StringEncoding, null);
    }
  },
  createLabel: function createLabel() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var label = NSTextField.alloc().init();
    label.setStringValue(text);
    label.setFont(NSFont.boldSystemFontOfSize(12));
    label.setBezeled(false);
    label.setDrawsBackground(false);
    label.setEditable(false);
    label.setSelectable(false);
    return label;
  },
  createTextField: function createTextField(value) {
    var field = NSTextField.alloc().init();
    field.setStringValue(value);
    return field;
  },
  createSelect: function createSelect(options) {
    var comboBox = NSPopUpButton.alloc().init();
    comboBox.addItemsWithTitles(options);
    comboBox.selectItemAtIndex(0);
    return comboBox;
  },
  createStepper: function createStepper(value) {
    var stepper = NSStepper.alloc().init();
    return stepper;
  },
  createCheckbox: function createCheckbox(title) {
    var checkbox = NSButton.alloc().init();
    checkbox.setButtonType(NSSwitchButton);
    checkbox.title = title;
    return checkbox;
  },
  createSettingsDialog: function createSettingsDialog(context) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var components = arguments.length > 2 ? arguments[2] : undefined;
    var cb = arguments.length > 3 ? arguments[3] : undefined;
    opts.title = opts.title || 'Alert';
    opts.informativeText = opts.informativeText || '';
    opts.cancelBtnText = opts.cancelBtnText || 'Cancel';
    opts.confirmBtnText = opts.confirmBtnText || 'Ok';
    var dialog = NSAlert.alloc().init();
    var dialogIconPath = context.plugin.urlForResourceNamed('icon.png').path();
    var dialogIcon = NSImage.alloc().initByReferencingFile(dialogIconPath);
    dialog.setIcon(dialogIcon);
    dialog.setMessageText(opts.title);
    dialog.setInformativeText(opts.informativeText);
    var btnConfirm = dialog.addButtonWithTitle(opts.confirmBtnText);
    var btnCancel = dialog.addButtonWithTitle(opts.cancelBtnText); // Create grid view

    var gridView = NSGridView.alloc().init(); // Create object to hold all inputs

    var inputs = {};
    var height = 0;
    var rowSpacing = 8; // Loop each component

    components.forEach(function (c) {
      var label, field;

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
          field = ui.createCheckbox();
          height += 22 + rowSpacing;
          gridView.addRowWithViews([label, field]);
          break;

        case 'multicheckbox':
          field = [];
          c.values.forEach(function (v, i) {
            label = i ? ui.createLabel() : ui.createLabel(c.label);
            var checkbox = ui.createCheckbox(v);
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
    }); // Set grid view as view of dialog

    dialog.accessoryView = gridView;
    gridView.columnSpacing = 30;
    gridView.rowSpacing = rowSpacing;
    gridView.frame = NSMakeRect(0, 0, 400, height); // Open the dialog and store the response code

    var responseCode = dialog.runModal(); // The dialog is being 'submitted'

    if (responseCode === 1000) {
      var data = {};
      components.forEach(function (c) {
        switch (c.type) {
          case 'text':
            data[c.id] = inputs[c.id].stringValue();
            break;

          case 'select':
            data[c.id] = c.options[inputs[c.id].indexOfSelectedItem()];
            break;

          case 'checkbox':
            break;

          case 'multicheckbox':
            var values = {};
            c.values.forEach(function (v, i) {
              values[v] = inputs[c.id][i].state() === 1;
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
/* harmony default export */ __webpack_exports__["default"] = (ui);

/***/ }),

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var util = {
  createTextStyleId: function createTextStyleId(textStyle) {
    var textStyleId = ''; // Make sure this id incorporates every possible property of the text style

    textStyleId += textStyle.fontFamily;
    textStyleId += '-' + textStyle.fontSize;
    textStyleId += '-' + textStyle.letterSpacing;
    textStyleId += '-' + textStyle.textTransform;

    if (textStyle.lineHeight) {
      textStyleId += '-' + textStyle.lineHeight;
    }

    if (textStyle.color) {
      textStyleId += '-' + textStyle.color.r + '-' + textStyle.color.g + '-' + textStyle.color.b + '-' + textStyle.color.a;
    }

    return textStyleId;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (util);

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=css-export.js.map