import React, {Component} from 'react';
import _ from 'lodash'

import logo from './logo.svg';
import PyramidLayout from './components/PyramidLayout.js'

import CARDS_DATA from './cards.json'
import './App.css'

const LAYOUTS = {
  'pyramid': PyramidLayout,
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      layout: 'pyramid',
      cards: this.pickCards(),
      flippedIndex: 0
    }
  }

  pickCards(){
    return _.sampleSize( CARDS_DATA, 6 ).map( card =>
      Object.assign( {}, card, { faceUp: false } )
    )
  }

  flipCard() {
    const { cards, flippedIndex } = this.state

    this.setState({
      cards: [
        ...cards.slice( 0, flippedIndex ),
        Object.assign( {}, cards[ flippedIndex ], { faceUp: true } ),
        ...cards.slice( flippedIndex + 1 )
      ],
      flippedIndex: flippedIndex + 1
    })
  }

  render() {
    const Layout = LAYOUTS[this.state.layout]

    return (
      <div className="App">
        <button onClick={this.flipCard.bind(this)}>Flip Next Card</button>
        <Layout cards={this.state.cards} />
      </div>
    );
  }
}

export default App;
