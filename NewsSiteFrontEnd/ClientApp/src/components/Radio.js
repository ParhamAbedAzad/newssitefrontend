import ReactAudioPlayer from 'react-audio-player';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export class Radio extends Component {
    render() {
        return (
            <div><ReactAudioPlayer
                src="https://localhost:44335/radio"
            autoPlay
                controls
                loop
            />
                </div>);
    };
};