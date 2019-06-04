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
    componentDidMount() {
        document.title = "صفحه اصلی";
    }
    componentWillMount() {
        axios.get(this.link + this.props.match.params.id).then(res => {
            const result = res.data;
            console.log(res.data);
            this.setState({ singleNews: res.data });
            document.title = this.state.singleNews.title;
        });

        axios.get(this.link2 + this.props.match.params.id).then(res => {
            const resu = res.data;
            console.log(res.data);
            this.setState({ newsPhoto: res.data });
        });
    }
    
    render() {
        return (


            <div id="khaje-content-left">
                <div id="khaje-content-main">
                    <div id="khaje-news" className="style-content">
                        <div id="news">
                            <div className="news-center">
                                <div className="news-title"><h2>{this.state.singleNews.title}</h2>
                                    <div>
                                        <div style={{ clear: 'both' }} />
                                    </div></div><br />
                                <div className="post-img" style={{ textAlign: 'center' }}>
                                    <a href="#" style={{ margin: '0px auto' }}>
                                    <img classNameName="imgnews" src={'/img/' + this.state.newsPhoto.map(h => h.photoUrl) + '.jpg'} alt="titleIMG" width="500em" height="250em"></img>
                                </a><div style={{ clear: 'both' }} /></div>
                                <br /><br /><div className="post-content"><p>{this.state.singleNews.text}</p></div>
                <div style={{clear: 'both'}}>
                </div>
              </div>
            </div>
          </div></div></div>
            
            );
    }
}