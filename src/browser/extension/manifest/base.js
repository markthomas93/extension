/**
 * This file is not meant to be imported directly as a manifest file.
 * Instead it should be imported by other files which contains all the missing manifest fields
 * which values are environment-specific.
 * See other files in the directory
 */

export default Object.freeze({
  'version': '0.1.0',
  'manifest_version': 2,
  'description': 'LMEM',
  'browser_action': {
    'default_icon': 'img/logo/48x48.png',
    'default_title': 'LMEM',
    'default_popup': 'popup.html'
  },
  'icons': {
    '16': 'img/logo/16x16.png',
    '48': 'img/logo/48x48.png',
    '128': 'img/logo/128x128.png'
  },
  'background': {
    'page': 'background.html'
  },
  'permissions': [
    'storage',
    'tabs',
    'unlimitedStorage',
    'http://*/*',
    'https://*/*'
  ],
  'web_accessible_resources': [
    'img/*',
    'styles/*',
    'fonts/*'
  ]
});