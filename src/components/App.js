require('normalize.css');
require('styles/App.css');

import React from 'react';
import Todos from './Todos';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor() {
    super();
    this.foo = 'bar';
  }

  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">
          <Todos />
        </div>
      </div>
    );
  }
}

export default AppComponent;
