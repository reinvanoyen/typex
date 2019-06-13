export default [
  {
    type: 'checkbox',
    id: 'merge',
    label: 'Merge',
    value: 'Merge identical styles'
  },
  {
    type: 'multicheckbox',
    id: 'excludeProps',
    label: 'Exclude properties',
    values: [
      'Color',
      'Line height'
    ]
  },
  {
    type: 'select',
    id: 'cssUnit',
    options: [
      'px',
      'em',
      'rem',
      '%',
      'vh',
      'vw',
      'No unit'
    ],
    label: 'CSS unit'
  },
  {
    type: 'text',
    id: 'scalingFactor',
    value: 1,
    label: 'Size scaling factor'
  },
  {
    type: 'text',
    id: 'maxDecimalPlaces',
    value: 2,
    label: 'Maximal decimal places'
  },
  {
    type: 'text',
    id: 'namingPrefix',
    value: 'type',
    label: 'Naming prefix'
  },
  {
    type: 'select',
    id: 'namingConvention',
    options: [
      'Numeric',
      'Text style name'
    ],
    label: 'Naming convention'
  }
];