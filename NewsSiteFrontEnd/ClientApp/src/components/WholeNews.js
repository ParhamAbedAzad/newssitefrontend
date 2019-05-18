import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export class WholeNews extends Component {
    link = "https://localhost:44335/news/";

    constructor(props) {
        super(props);

        this.state = {
            singleNews : {}
        };
    }

    componentWillMount() {
        axios.get(this.link + this.props.match.params.id).then(res => {
            const result = res.data;
            console.log(res.data);
            this.setState({ singleNews: res.data });
        });
        
    }
    
    render() {
        console.log(this.state.singleNews)
        return (
            <div className="mainPage">
                <section>
                    <div className="FullNews">
                        <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="500em" height="250em"></img>
                        <div>
                            <h2>{this.state.singleNews.title}</h2>
                            <p>{this.state.singleNews.text}</p>
                        </div>
                    </div>
                </section>
                <nav>
                    <img src="img/login.png" alt width="400em" />
                </nav>
            </div>
            );
    }
}