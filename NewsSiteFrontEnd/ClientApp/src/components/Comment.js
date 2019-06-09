import React, { Component } from 'react';

export class Comment extends Component {

    render() {
        return (
            <div class="comment" id="comment-1">
                <img src="img/avatar.jpg" alt="" class="userGravatar"></img>
                <div class="userInfo">
                    <span class="uName">{this.props.body.username}</span>
                    <span class="cDate hidden-xs">{this.props.body.date}</span>

                </div>
                <div class="cBody">
                    <p>{this.props.body.body}</p>
                </div>
            </div>
        );
    }
}
