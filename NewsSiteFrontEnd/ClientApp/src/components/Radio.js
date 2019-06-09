import ReactAudioPlayer from 'react-audio-player';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export class Radio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            urls: [{}],
            b: false
        };
    }
    getHtml() {
        if (this.state.b) {
            return (<a onClick={this.state.b = true} > 1</a>);
        }
        
        return (<ReactAudioPlayer
            src="http://185.252.30.32:6002/radio"
            autoPlay
            controls
            loop
        />);
    }
    componentWillMount() {
        axios.get("http://185.252.30.32:6002/radio/tracks").then(res => this.setState({ urls: res.data }));
    }
    render() {
        return (
            <div>

                {this.getHtml()}
            </div>



        );
    };
};