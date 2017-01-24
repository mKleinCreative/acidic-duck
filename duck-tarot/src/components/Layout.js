import React, {Component} from 'react'
import Card from './Card'

export default class Layout extends Component {
  constructor(props) {
    super(props)
    console.log('props', props);

    this.state = {}
  }

  mapCards() {
    return this.props.cards.map((card, index) =>
      <Card key={index} card={card}/>
    )
  }

  render() {
    return (
      <div>
        <h2> I love polka dots </h2>
        <div>{this.mapCards()}</div>
      </div>
    )
  }
}
