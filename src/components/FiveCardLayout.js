import React, {Component, PropTypes} from 'react'
import Card from './Card'
import CardBack from './CardBack'
import _ from 'lodash'

export default class FiveCardLayout extends Component {

  static propTypes = {
    cards: PropTypes.array.isRequired,

  }

  renderCards() {
    // assign positions
    // render Cards or CardBacks

    return this.props.cards.map( card => {
      return Object.assign( {}, card )
    }).map( (card, index) => {
      if( card.faceUp ) {
        return <Card {...card} positionInfo={this.props.positionInfos[index]}
                 flippedIndex={this.props.flippedIndex}
                 positionTitle={this.props.positionTitles[index]}
                key={`card-${index}`} />
      } else {
        return <CardBack {...card} key={`card-${index}`} />
      }
    })

  }

  render() {
    return (
      <div className="FiveCardLayout">
        <div className="FiveCardLayout-cards">{this.renderCards()}</div>
      </div>
    )
  }
}
