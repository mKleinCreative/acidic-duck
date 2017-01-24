import React, {Component} from 'react'
import cardInfo from '../cardInfo'

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>HI THERE</h1>
      <h3>{JSON.stringify(this.props.card)}</h3>
      {/* <div>{this.props.card.normalDescription}</div> */}
    </div>
  }
}
