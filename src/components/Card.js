import React, {Component, PropTypes} from 'react'

export default class Card extends Component {

  static propTypes = {
    "assetName": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "description": PropTypes.string.isRequired,
    "reverseDescription": PropTypes.string.isRequired,
    "faceUp": PropTypes.bool.isRequired,
    "x": PropTypes.number.isRequired,
    "y": PropTypes.number.isRequired

  }

  imageSource() {
    const { assetName } = this.props

    return `https://mkleincreative.files.wordpress.com/2016/09/${assetName.toLowerCase()}.jpg`
  }

  render() {
    const { name, description } = this.props

    return(
      <div className="Card">
        <img src={this.imageSource()} />
        <h1>{name}</h1>
        <div>{description}</div>
      </div>
    )
  }

}
