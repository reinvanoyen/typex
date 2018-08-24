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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/json-export.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/json-export.js":
/*!****************************!*\
  !*** ./src/json-export.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/ui */ "./src/util/ui.js");
/* harmony import */ var _util_export__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/export */ "./src/util/export.js");
/* harmony import */ var _util_sketch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/sketch */ "./src/util/sketch.js");



/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  // Get the text styles from the Sketch document
  var textStyles = _util_sketch__WEBPACK_IMPORTED_MODULE_2__["default"].getTextStyles(context);
  var css = [];
  textStyles.forEach(function (textStyle) {
    css.push(_util_export__WEBPACK_IMPORTED_MODULE_1__["default"].createCssProps(textStyle));
  }); // Ask the user to save the file

  _util_ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSavePanel('typex-text-styles.json', JSON.stringify(css));
});
;

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var MARGIN = 10;
var LABEL_WIDTH = 200;
var LABEL_HEIGHT = 22;
var FIELD_WIDTH = 50;
var FIELD_HEIGHT = 22;
var SELECT_HEIGHT = 28;
var SELECT_WIDTH = 200;
var currentOffset = 0;
var ui = {
  createLabel: function createLabel(view, text) {
    var frame = NSMakeRect(0, currentOffset, LABEL_WIDTH, LABEL_HEIGHT);
    var label = NSTextField.alloc().initWithFrame(frame);
    label.setStringValue(text);
    label.setFont(NSFont.boldSystemFontOfSize(12));
    label.setBezeled(false);
    label.setDrawsBackground(false);
    label.setEditable(false);
    label.setSelectable(false);
    view.addSubview(label); // currentOffset = currentOffset + LABEL_HEIGHT;

    return label;
  },
  createField: function createField(view, value) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : FIELD_WIDTH;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : FIELD_HEIGHT;
    var frame = NSMakeRect(LABEL_WIDTH, currentOffset, width, height);
    var field = NSTextField.alloc().initWithFrame(frame);
    field.setStringValue(value);
    view.addSubview(field);
    currentOffset = currentOffset + height + MARGIN;
    return field;
  },
  createSelect: function createSelect(view, options) {
    var frame = NSMakeRect(LABEL_WIDTH, currentOffset, SELECT_WIDTH, SELECT_HEIGHT);
    var comboBox = NSComboBox.alloc().initWithFrame(frame);
    comboBox.addItemsWithObjectValues(options);
    comboBox.selectItemAtIndex(0);
    comboBox.setNumberOfVisibleItems(16);
    comboBox.setCompletes(1);
    view.addSubview(comboBox);
    currentOffset = currentOffset + SELECT_HEIGHT + MARGIN;
    return comboBox;
  },
  getCurrentOffset: function getCurrentOffset() {
    return currentOffset;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ui);

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
  createCssProps: function createCssProps(textStyle) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    opts.cssUnit = opts.cssUnit || 'px';
    opts.scalingFactor = opts.scalingFactor || 1;
    opts.maxDecimalPlaces = opts.maxDecimalPlaces || 2;
    var cssProps = {};
    cssProps['font-family'] = textStyle.fontFamily;
    cssProps['font-weight'] = 400;
    cssProps['line-height'] = 1;
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

    return cssProps;
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
    var exportedTextStyles = {};
    var output = "\n      <!DOCTYPE html>\n      <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <title>Typex text styles</title>\n      </head>\n      <body style=\"padding: 0; margin: 0;\">\n    ";
    textStyles.forEach(function (textStyle, i) {
      var textStyleId = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createTextStyleId(textStyle);

      if (!exportedTextStyles[textStyleId]) {
        var cssProps = exportUtils.createCssProps(textStyle, opts);
        var inlineStyleString = exportUtils.createInlineStyleString(cssProps);
        output += "\n          <div style=\"box-shadow: 0 5px 15px #f0f0f0; padding: 25px 50px; border-bottom: 1px solid #ccc;\">\n            <div style=\"font-family: Helvetica, Arial, Sans-Serif; font-size: 14px; margin-bottom: 15px;\">\n              <span>".concat(i + 1, ".</span>\n              <span>\n                ").concat(textStyle.name, "\n              </span>\n              <span style=\"color: #ccc;\">\n                ").concat(inlineStyleString, "\n              </span>\n            </div>\n            <div style=\"").concat(inlineStyleString, ";\">").concat(opts.previewText, "</div>\n          </div>\n        "); // Add the id to the stack of text styles we've already exported

        exportedTextStyles[textStyleId] = true;
      }
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

      textStyle.letterSpacing = rawTextStyle.attributes.NSKern || 0;
      textStyle.textTransform = parseInt(rawTextStyle.attributes.MSAttributedStringTextTransformAttribute || 0); // @TODO strikethrough & underline, or is this not needed?

      textStyles.push(textStyle);
    });
    return textStyles;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (sketch);

/***/ }),

/***/ "./src/util/ui.js":
/*!************************!*\
  !*** ./src/util/ui.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui */ "./src/ui.js");



var uiUtils = {
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
  createHtmlFontbookExportSettingsWindow: function createHtmlFontbookExportSettingsWindow(context, cb) {
    // @TODO create refactored function (look a NSGridView for creating the form)
    var cssUnits = ['px', 'em', 'rem'];
    var alert = NSAlert.alloc().init();
    var view = NSView.alloc().init();
    var alertIconPath = context.plugin.urlForResourceNamed('icon.png').path();
    var alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath);
    alert.setIcon(alertIcon);
    alert.setMessageText('Typex');
    alert.setInformativeText('Export your text styles to web');
    var labelPreviewText = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createLabel(view, 'Preview text');
    var fieldPreviewText = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createField(view, 'The quick brown fox jumps over the lazy dog', 200, 75);
    var labelMaxDecimalPlaces = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createLabel(view, 'Maximum decimal places');
    var fieldMaxDecimalPlaces = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createField(view, '2');
    var labelScalingFactor = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createLabel(view, 'Scaling factor');
    var fieldScalingFactor = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createField(view, '1');
    var labelCssUnit = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createLabel(view, 'CSS unit');
    var selectCssUnit = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSelect(view, cssUnits);
    var btnExport = alert.addButtonWithTitle('Export');
    var btnCancel = alert.addButtonWithTitle('Cancel');
    view.frame = NSMakeRect(0, 0, 400, _ui__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentOffset());
    alert.accessoryView = view;
    var responseCode = alert.runModal();

    if (responseCode === 1000) {
      var exportOpts = {
        cssUnit: cssUnits[selectCssUnit.indexOfSelectedItem()],
        scalingFactor: parseFloat(fieldScalingFactor.stringValue().replace(',', '.')),
        maxDecimalPlaces: parseInt(fieldMaxDecimalPlaces.stringValue()),
        previewText: fieldPreviewText.stringValue()
      };
      cb(exportOpts);
    }
  },
  createSassExportSettingsWindow: function createSassExportSettingsWindow(context, cb) {
    // @TODO create refactored function (look a NSGridView for creating the form)
    var cssUnits = ['px', 'em', 'rem'];
    var mixinNamingConventions = ['Numeric', 'Text style name'];
    var alert = NSAlert.alloc().init();
    var view = NSView.alloc().init();
    var alertIconPath = context.plugin.urlForResourceNamed('icon.png').path();
    var alertIcon = NSImage.alloc().initByReferencingFile(alertIconPath);
    alert.setIcon(alertIcon);
    alert.setMessageText('SASS export');
    alert.setInformativeText('Export your text styles to SASS mixins');
    var labelMixinNamingPrefix = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createLabel(view, 'Naming prefix');
    var fieldMixinNamingPrefix = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createField(view, 'type');
    var labelMixinNamingConvention = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createLabel(view, 'Mixin naming convention');
    var selectMixinNamingConvention = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSelect(view, mixinNamingConventions);
    var labelMaxDecimalPlaces = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createLabel(view, 'Maximum decimal places');
    var fieldMaxDecimalPlaces = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createField(view, '2');
    var labelScalingFactor = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createLabel(view, 'Scaling factor');
    var fieldScalingFactor = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createField(view, '1');
    var labelCssUnit = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createLabel(view, 'CSS unit');
    var selectCssUnit = _ui__WEBPACK_IMPORTED_MODULE_0__["default"].createSelect(view, cssUnits);
    var btnExport = alert.addButtonWithTitle('Export');
    var btnCancel = alert.addButtonWithTitle('Cancel');
    view.frame = NSMakeRect(0, 0, 400, _ui__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentOffset());
    alert.accessoryView = view;
    var responseCode = alert.runModal();

    if (responseCode === 1000) {
      var exportOpts = {
        cssUnit: cssUnits[selectCssUnit.indexOfSelectedItem()],
        scalingFactor: parseFloat(fieldScalingFactor.stringValue().replace(',', '.')),
        maxDecimalPlaces: parseInt(fieldMaxDecimalPlaces.stringValue()),
        namingConvention: mixinNamingConventions[selectMixinNamingConvention.indexOfSelectedItem()],
        namingPrefix: fieldMixinNamingPrefix.stringValue()
      };
      cb(exportOpts);
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (uiUtils);

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
    textStyleId += '-' + textStyle.lineHeight;
    textStyleId += '-' + textStyle.letterSpacing;
    textStyleId += '-' + textStyle.textTransform;
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

//# sourceMappingURL=json-export.js.map