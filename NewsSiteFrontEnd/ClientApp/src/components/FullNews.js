﻿import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class FullNews extends Component {
    singleNews = {
        "id": 11,
        "title": "sth sth sth",
        "text": "Rep. Alexandria Ocasio-Cortez blamed Twitter's character limitations -- and the reading skills of her critics -- after getting called out for spreading misinformation about the newly signed abortion ban in Alabama. The New York Democrat used the social media platform to criticize the law, which was signed by the governor on Wednesday and outlaws nearly all abortions in the state. The same law also makes performing an abortion a felony, punishable by up to 99 years or life in prison unless the mother’s health is at risk, with no exceptions for women impregnated by rape or incest.",
        "dateAdded": "2019-05-16T19:28:41.943",
        "adminId": 2
    }
    componcomponentdidMount() {
        axios.get(this.link + "/news/" + ).then(res => this.arr = res);
    }
    render() {
        return (
            <div className="singleNews">
                <div className="textandpic">
                    <div className="texts">
                        <a href="MyPage.html"><h2>{this.props.new.title}</h2></a>
                        <p>{this.props.new.text}'</p>
                    </div>
                    <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="500em" height="250em" />
                </div>
            </div>
        );


    }
}
SingleNews.propTypes = {
    new: PropTypes.object
};