import React, { Component } from 'react';

import '../common/styles/style.css';
import Header from './Header/Header';
import Main from './Main/Main';

class App extends Component {
  render () {
    return (
      <>
        <Header/>
        <Main/>
      </>
    )
  }
};

export default App;
