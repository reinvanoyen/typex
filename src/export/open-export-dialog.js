import ui from '../util/ui';
import exportUtils from '../util/export';
import sketchUtils from '../util/sketch';

import exportComponents from './export-components';

export default function(context, opts, cb) {

  ui.createSettingsDialog(context, opts, exportComponents, (data) => {

    // Defaults
    data.propertyNamingConvention = data.propertyNamingConvention || 'Numeric';
    data.cssUnit = (data.cssUnit === 'No unit' ? 0 : data.cssUnit);

    // First store the properties we should exclude
    let excludeProps = [];
    if (data['excludeProps']['Color']) {
      excludeProps.push('color');
    }

    if (data['excludeProps']['Line height']) {
      excludeProps.push('lineHeight');
    }

    // Get the text styles from the Sketch document
    let textStyles = sketchUtils.getTextStyles(context);
    textStyles = exportUtils.sortTextStyles(textStyles);
    textStyles = exportUtils.excludeTextStyleProperties(textStyles, excludeProps);

    if (data['merge']) {
      textStyles = exportUtils.removeDoubleTextStyles(textStyles);
    }

    cb(textStyles, data);
  });
};