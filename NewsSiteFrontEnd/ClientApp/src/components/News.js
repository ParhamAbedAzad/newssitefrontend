import React, { Component } from 'react';
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
            /*<div className="singleNews">
                <div className="textandpic">
                    <div className="texts">
                        <a href={"./news/" + this.props.new.id}><h2>{this.props.new.title}</h2></a>
                        <p>{String(this.props.new.text).split(' ').slice(0, 40).join(' ')}'</p>
                    </div>
                    <img src={'/img/' + this.props.new.id + '.jpg'} alt="titleIMG" width="200em" height="180em" />
                </div>
            </div>*/
            <div class="news-center">
                <a href="#"><img src={'/img/' + this.props.new.id + '.jpg'} alt="titleIMG" width="200em" height="180em" /></a>
                <p><span>{this.props.new.title}</span>{String(this.props.new.text).split(' ').slice(0, 40).join(' ')}</p>
                <div style={{ clear: 'both' }}>
                    <div class="btn-more" style={{/*! background: '#ccc'*/}}>
                        <a href={"./news/" + this.props.new.id} class="btn--more">ادامه خبر</a>
                            <div></div></div>
                    </div>
				</div>
        );
    }
}
SingleNews.propTypes = {
    new: PropTypes.object
};