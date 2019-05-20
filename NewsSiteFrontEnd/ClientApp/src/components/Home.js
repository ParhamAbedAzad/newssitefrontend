import React, { Component } from 'react';
import './Style.css';
import { SingleNews } from './News.js';
import axios from 'axios';
import { Login } from './Login.js';
export class Home extends Component {
    static displayName = Home.name;
    link = "https://localhost:44335/news/1/6";
    new = [];
    constructor(props) {
        super(props);

        this.state = {
            newsArr: [{}]
        };
    }
    componentWillMount() {
        axios.get(this.link).then(res => this.setState({newsArr: res.data}));
    }
    
  render () {
      return (
          <div className="mainPage">
              <section>
                  <SingleNews new={Object(this.state.newsArr[0])}></SingleNews>
                  <SingleNews new={Object(this.state.newsArr[1])}></SingleNews>
                  <SingleNews new={Object(this.state.newsArr[2])}></SingleNews>
                  <SingleNews new={Object(this.state.newsArr[3])}></SingleNews>
                  <SingleNews new={Object(this.state.newsArr[4])}></SingleNews>
                  <SingleNews new={Object(this.state.newsArr[5])}></SingleNews>
              </section>
          </div>
    );
  }
}
