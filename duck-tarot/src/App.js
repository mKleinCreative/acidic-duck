import React, {Component} from 'react';
import logo from './logo.svg';
import Layout from './components/Layout.js'
import ReadingInfo from './components/ReadingInfo.js'
import cardInfo from './cardInfo'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.layouts = {}
    this.positions = {}
    this.currentLayout = {}
    this.state = {
      arrayOfCards: cardInfo
    }
  }

  render() {
    const arrayOfCards = this.state.arrayOfCards

    return (
      <div className="App">
        <Layout cards={arrayOfCards} />
        <ReadingInfo />
      </div>
    );
  }
}

export default App;
