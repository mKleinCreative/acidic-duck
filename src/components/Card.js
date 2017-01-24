import React, {Component, PropTypes} from 'react'

export default class Card extends Component {

  static propTypes = {
    card: PropTypes.object.isRequired,
    faceUp: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    faceUp: false,
  }

  render() {
    const  { card, faceUp } = this.props
    const imgSrc = `https://mkleincreative.files.wordpress.com/2016/09/${card.assetName.toLowerCase()}.jpg`

    const className = `Card ${faceUp ? 'Card-faceUp' : ''}`
    return <div className={className}>
      <div className="Card-front">
        <img src={imgSrc}/>
      </div>
      <div className="Card-back">
        <h1>{card.name}</h1>
        <div>{card.description}</div>
      </div>
    </div>
  }
}
