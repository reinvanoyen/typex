"use strict";

let structureExample = [
  {
    type: 'text',
    id: 'myTextField',
    value: 'The default value',
    label: 'Fill out your value',
    description: 'If you fill out your value here, something will happen!',
  },
  {
    type: 'text',
    id: 'yourMessage',
    value: '',
    label: 'Questions or feedback?',
    description: '',
    multiline: true
  },
  {
    type: 'select',
    id: 'cssUnit',
    options: ['px', 'rem', 'em'],
    label: 'CSS unit',
    description: 'The CSS unit to export to'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    text: 'Export'
  },
  {
    type: 'number',
    id: 'scalingFactor',
    value: 1,
    label: 'CSS unit',
    description: 'The scaling factor',
    max: 50,
    min: 0,
    step: 0.01,
  },
  {
    type: 'checkbox',
    id: 'googleWebfonts',
    value: true,
    label: 'Use Google Webfonts',
    description: ''
  }
];

const newUi = {
  createSettingsDialog(structure, cb) {
    // @ TODO create settings dialog from structure, on submit, call the cb
  }
};