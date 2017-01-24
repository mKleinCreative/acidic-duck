import React, {Component} from 'react'
import cardInfo from '../cardInfo'

export default class Card extends Component {
  constructor(props) {
    super(props)
    const {name} = this.props
    this.props = this.props.cardInfo
  }

  render() {
    return <div>
      <h1>HI THERE</h1>
      <img src={this.props.card.image}/>
      <div>{this.props.card.name}</div>
      <div>{this.props.card.normalDescription}</div>
    </div>
  }
}
