import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TemplateDefault from './components/TemplateDefault';

import Bootstrap from 'bootstrap';

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
