import React from 'react';
import { render } from 'react-dom';

import PopupRoot from './PopupRoot';

import '../styles/main.scss';

const { store } = chrome.extension.getBackgroundPage();

render(<PopupRoot store={store} />, document.getElementById('root'));
