import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
export class SingleNews extends Component {
    link = "https://localhost:44335/news/"
    constructor(props) {
        super(props);

        this.state = {
            new: {}
        };
    /*singleNews = {
        "id": 11,
        "title": "sth sth sth",
        "text": "Rep. Alexandria Ocasio-Cortez blamed Twitter's character limitations -- and the reading skills of her critics -- after getting called out for spreading misinformation about the newly signed abortion ban in Alabama. The New York Democrat used the social media platform to criticize the law, which was signed by the governor on Wednesday and outlaws nearly all abortions in the state. The same law also makes performing an abortion a felony, punishable by up to 99 years or life in prison unless the mother’s health is at risk, with no exceptions for women impregnated by rape or incest.",
        "dateAdded": "2019-05-16T19:28:41.943",
        "adminId": 2
    }*/}

    componentWillMount() {
        axios.get(this.link + this.props.match.params.id).then(res => {
            const result = res.data;
            console.log(res.data);
            this.setState({ new: res.data });
        });

    }

    render() {
        return (
            <div className="singleNews">
                <div className="textandpic">
                    <div className="texts">
                        <a href={"./news/" + this.props.new.id}><h2>{this.props.new.title}</h2></a>
                        <p>{this.props.new.text.split(' ').slice(0, 40).join(' ')}'</p>
                    </div>
                    <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="200em" height="100em" />
                </div>
            </div>
        );
      

    }
}
SingleNews.propTypes = {
    new: PropTypes.object
};