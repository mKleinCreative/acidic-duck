import React, {Component, PropTypes} from 'react'
import Card from './Card'
import CardBack from './CardBack'
import _ from 'lodash'

export default class PyramidLayout extends Component {

  static propTypes = {
    cards: PropTypes.array.isRequired,

  }

  renderCards() {
    // assign positions
    // render Cards or CardBacks

    return this.props.cards.map( card => {
      return Object.assign( {}, card )
    }).map( card => {
      if( card.faceUp ) {
        return <Card {...card} />
      } else {
        return <CardBack {...card} />
      }
    })

  }

  render() {
    return (
      <div className="PyramidLayout">

        <div className="PyramidLayout-cards">{this.renderCards()}</div>
      </div>
    )
  }
}
