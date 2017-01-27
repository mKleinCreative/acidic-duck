import React, {Component, PropTypes} from 'react'

export default class Card extends Component {

  static propTypes = {
    "assetName": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "description": PropTypes.string.isRequired,
    "reverseDescription": PropTypes.string.isRequired,
    "faceUp": PropTypes.bool.isRequired,
    "isReversed": PropTypes.bool.isRequired,

  }

  cardDescription() {
    let desc = {}
    desc = (this.props.isReversed === true) ?  this.props.description : this.props.reverseDescription
    return desc
  }

  imageSource() {
    const { assetName } = this.props
    return `https://mkleincreative.files.wordpress.com/2016/09/${assetName.toLowerCase()}.jpg`
  }



  render() {
    const { name, isReversed } = this.props
    const cardClass = `Card ${isReversed ? 'Card' : 'Card-reverse'}`

    return(
      //change class name depending on isReversed
      <div className={cardClass}>
        <img src={this.imageSource()} alt={name} />
        <h3>{name}</h3>
        <div>{this.cardDescription()}</div>
      </div>
    )
  }

}
