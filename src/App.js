import React, {Component} from 'react';
import logo from './logo.svg';
import PyramidLayout from './components/PyramidLayout.js'
import cards from './cards.json'
import './App.css'

const LAYOUTS = {
  'pyramid': PyramidLayout,
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: 'pyramid'
    }
  }

  render() {
    const Layout = LAYOUTS[this.state.layout]
    return (
      <div className="App">
        <Layout cards={cards} />
      </div>
    );
  }
}

export default App;
