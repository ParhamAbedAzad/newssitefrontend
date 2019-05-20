﻿import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
export class SingleNews extends Component {
    link = "https://localhost:44335/news/"
    constructor(props) {
        super(props);

        /*this.state = {
            new: {}*/
    };
    getStr(str) {
    var resultStr = "";
    resultStr = str;
    return str;
}
    

    /*componentWillMount() {
        axios.get(this.link + this.props.match.params.new.id).then(res => {
            const result = res.data;
            console.log(res.data);
            this.setState({ new: res.data });
        });

    }*/
    
    render() {
        return (
            <div className="singleNews">
                <div className="textandpic">
                    <div className="texts">
                        <a href={"./news/" + this.props.new.id}><h2>{this.props.new.title}</h2></a>
                        <p>{String(this.props.new.text).split(' ').slice(0, 40).join(' ')}'</p>
                    </div>
                    <img src={'/img/' + this.props.new.id + '.jpg'} alt="titleIMG" width="200em" height="100em" />
                </div>
            </div>
        );


    }
}
SingleNews.propTypes = {
    new: PropTypes.object
};