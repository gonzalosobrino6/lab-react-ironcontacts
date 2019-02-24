import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/misc/Title';
import CelebrityItem from './components/celebrities/CelebrityItem';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Title />
        <CelebrityItem />
      </Fragment>
    );
  }
}

export default App;
