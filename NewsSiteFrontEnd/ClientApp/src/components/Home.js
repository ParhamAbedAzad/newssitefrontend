import React, { Component } from 'react';
import { SingleNews } from './SingleNews.js';
import axios from 'axios';
import { Login } from './Login.js';
export class Home extends Component {
    static displayName = Home.name;
    s = "";
    page = 0;
    totalPages = 2;
    start = 0;
    link = "http://185.252.30.32:6002/news/";
    link2 = "http://185.252.30.32:6002/news/page";
    new = [];
    constructor(props) {
        super(props);

        this.state = {
            newsArr: [{}],
            fullArr: [{}],
            st : "/home"
        };
    }
    componentDidMount() {
        document.title = "صفحه اصلی";
    }
    componentWillMount() {
        axios.get(this.link2).then((res) => { this.totalPages = res.data;});
         if (this.props.match.params.id != null)
               this.page = this.props.match.params.id;
        this.start = (this.page * 6) + 1;
        this.end = (this.page * 6) + 6;
        axios.get(this.link + (this.start) + "/" + (this.end)).then(res => this.setState({ newsArr: res.data }));
        axios.get(this.link).then(res => this.setState({ fullArr: res.data }));
    }
    redrct() {
        let wy = this.state.st;
        window.location.href = wy;
    }
        getButtons() {
        let result = [];
        let i = 0;
        for (i = 0; i < this.totalPages; i++) {
            let j = i;
            this.s = "/home/" +  i ;
           
            result[i] = <a href={this.s} id="btnofpages"  >{++j}</ a>;
            }
        return result;
    }
    render() {
        return (
            <div id="khaje-content-left">
                <div id="khaje-content-main">
                    <div id="khaje-news" class="style-content">
                        <h3>آخرین خبرها</h3>
                        <div id="news">
                            
                            <SingleNews new={Object(this.state.newsArr[0])}></SingleNews>
                            <SingleNews new={Object(this.state.newsArr[1])}></SingleNews>
                            <SingleNews new={Object(this.state.newsArr[2])}></SingleNews>
                            <SingleNews new={Object(this.state.newsArr[3])}></SingleNews>
                            <SingleNews new={Object(this.state.newsArr[4])}></SingleNews>
                            <SingleNews new={Object(this.state.newsArr[5])}></SingleNews>
                        </div>
                        {this.getButtons().map((res)=> res)}
                    </div>
                </div>
            </div>
        );
    }
}
