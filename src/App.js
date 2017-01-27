import React, {Component} from 'react';
import _ from 'lodash'

// import logo from './logo.svg';
import PyramidLayout from './components/PyramidLayout.js'

import CARDS_DATA from './cards.json'
import './App.css'

import LAYOUT_DATA from './layoutData.json'

const LAYOUTS = {
  'pyramid': PyramidLayout,
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      layout: 'pyramid',
      cards: this.pickCards(),
      flippedIndex: 0,
      positionInfoArray: [],
      positionInfo: '',
      question: '',
      questionEntered: false
    }
  }

  pickCards(){
    return _.sampleSize( CARDS_DATA, 5 ).map( card =>
      Object.assign( {}, card, { faceUp: false, isReversed: !!_.random(1) } )
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
      //Array commented out for later refactoring
      //positionInfoArray: positionInfoArray.concat( LAYOUT_DATA[flippedIndex].positionInfo ),
      flippedIndex: flippedIndex + 1,
      positionInfo: LAYOUT_DATA[flippedIndex].positionInfo,
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.setState({ questionEntered: true })
  }

  onChange( event ) {
    this.setState({ question: event.target.value })
  }

  questionForm() {
    return (
      <div>
        <h2 className="questionz">Please ask your question:</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.question} onChange={this.onChange.bind(this)} ref="question"/>
          <button className="questionz" type="submit">Submit</button>
        </form>
      </div>
    )
  }

  questionDisplay() {
    return (
      <div className="questionz">{this.state.question}</div>
    )
  }

  render() {
    const Layout = LAYOUTS[this.state.layout]
    const positionInfos = LAYOUT_DATA.map(function(positionInfo){
      return positionInfo.positionInfo
    })
    return (
      <div className="App rug">
        <h1 className="questionz">Welcome to your Tarot reading</h1>
        {this.state.questionEntered ? this.questionDisplay() : this.questionForm() }
        <br/>
        <button className="questionz" onClick={this.flipCard.bind(this)}>Flip Next Card</button>
        <Layout cards={this.state.cards} positionInfos={positionInfos} />
        <div>
        </div>
      </div>
    );
  }
}

export default App;
