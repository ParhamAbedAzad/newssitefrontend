import React, { Component } from 'react';

export class Comment extends Component {

    render() {
        return (
            <div class="comment" id="comment-1">
                <img src="img/avatar.jpg" alt="" class="userGravatar"></img>
                    <div class="userInfo">
                        <span class="uName">mohammad</span>
                        <span class="cDate hidden-xs"> چها4شنبه , ۲۵ تیر ۱۳۹۳</span>

                    </div>
                    <div class="cBody">
                        <p>این یک متن تست است ارزشی ندارد باور کن </p>
                </div>
            </div>
        );
    }
}
