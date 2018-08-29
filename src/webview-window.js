"use strict";

import BrowserWindow from 'sketch-module-web-view'

export default function(context) {

  const options = {
    identifier: 'unique.id',
  };

  const browserWindow = new BrowserWindow(options);

  browserWindow.loadURL('../Resources/frontend/index.html');
}