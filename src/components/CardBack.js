import React, { Component } from 'react'

export default class CardBack extends Component {

  imageSource() {
    return `https://mkleincreative.files.wordpress.com/2016/09/cardback.jpg`
  }


  render() {
    return (
      <div className="Card">
        <img src={this.imageSource()} alt="Back of a Card" />
      </div>
    )
  }
}
