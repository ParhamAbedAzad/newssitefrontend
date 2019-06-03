import React, { Component } from 'react';

export class Comment extends Component {

  render () {
    return (
        <div>
            <h3></h3>
            <p> <b>{this.props.body.username}:</b> {this.props.body.body} < br ></br></p>
      </div>
    );
  }
}
