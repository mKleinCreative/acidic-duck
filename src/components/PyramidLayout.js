import React, {Component, PropTypes} from 'react'
import Card from './Card'
import _ from 'lodash'

export default class PyramidLayout extends Component {

  static propTypes = {
    cards: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      cards: this.pickCards(),
      flippedCards: [],
    }
  }

  pickCards(){
    return _.sampleSize(this.props.cards, 6)
  }

  repickCards = () => {
    const cards = this.pickCards()
    this.setState({cards})
    this.setState({flippedCards: []})
  }

  flipNextCard = () => {
    const flippedCards = this.state.flippedCards
    const nextUnflippedCard = this.state.cards.find(card =>
      !flippedCards.includes(card)
    )
    if (nextUnflippedCard) flippedCards.push(nextUnflippedCard)
    this.setState({flippedCards})
  }

  renderCards() {
    return this.state.cards.map((card, index) =>
      <Card
        key={index}
        card={card}
        faceUp={this.state.flippedCards.includes(card)}
      />
    )
  }

  render() {
    return (
      <div className="PyramidLayout">
        <button onClick={this.repickCards}>shuffle</button>
        <button onClick={this.flipNextCard}>flip next card</button>
        <h2> I love polka dots </h2>
        <div className="PyramidLayout-cards">{this.renderCards()}</div>
      </div>
    )
  }
}
