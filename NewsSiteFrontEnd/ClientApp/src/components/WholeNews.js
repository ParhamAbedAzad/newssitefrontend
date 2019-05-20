import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export class WholeNews extends Component {
    link = "https://localhost:44335/news/";
    link2 = "https://localhost:44335/newsPhoto/n/";
    constructor(props) {
        super(props);

        this.state = {
            singleNews: {},
            newsPhoto: []
        };
    }

    componentWillMount() {
        axios.get(this.link + this.props.match.params.id).then(res => {
            const result = res.data;
            console.log(res.data);
            this.setState({ singleNews: res.data });
        });

        axios.get(this.link2 + this.props.match.params.id).then(res => {
            const resu = res.data;
            console.log(res.data);
            this.setState({ newsPhoto: res.data });
        });
    }
    
    render() {
        return (
            <div className="mainPage">
                <section>
                    <div className="FullNews">
                        <img className="imgnews" src={'/img/' + this.state.newsPhoto.map(h => h.photoUrl ) + '.jpg'} alt="titleIMG" width="500em" height="250em"></img>
                        <div>
                            <h2>{this.state.singleNews.title}</h2>
                            <p>{this.state.singleNews.text}</p>
                        </div>
                    </div>
                </section>
            </div>
            );
    }
}