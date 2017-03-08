import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './components/component.jsx';
// import './main.css';

main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}

// 'use strict';
// var component = require('./components/productBox.js');
// document.body.appendChild(component());