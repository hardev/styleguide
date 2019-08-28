import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Bootstrap from 'bootstrap';

// SCSS
import './assets/stylesheets/main.scss';
import './assets/stylesheets/design_system_website.scss';

// Javascript
import './assets/js/component_functions.js';

import TemplateDefault from './components/TemplateDefault';

class App extends Component {

  constructor(props) {
		super(props);
	}

  render() {
    return (
      <TemplateDefault
        pageTitle="Introduction"
        activeParent="introduction"
        activeChild="">

        Page under development.

      </TemplateDefault>
    );
  }
}

export default App;
