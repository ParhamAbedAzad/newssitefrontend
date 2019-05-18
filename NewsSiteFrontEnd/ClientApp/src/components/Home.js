import React, { Component } from 'react';
import './Style.css';
import { SingleNews } from './News.js';
import axios from 'axios';
export class Home extends Component {
    static displayName = Home.name;

    link = "http://localhost:44335";
    arr = [];
    componcomponentdidMount() {
        axios.get(this.link + "/news/1/6").then(res => this.arr = res);
    }
  render () {
      return (
          
              
          <div className="mainPage">
              <section>
                  <SingleNews new={this.arr[0]}></SingleNews>
                  <SingleNews new={this.arr[1]}></SingleNews>
                  <SingleNews new={this.arr[2]}></SingleNews>
                  <SingleNews new={this.arr[3]}></SingleNews>
                  <SingleNews new={this.arr[4]}></SingleNews>
                  <SingleNews new={this.arr[5]}></SingleNews>
              </section>
              <nav>
                  <img src="img/login.png" alt width="400em" />
              </nav>
          </div>
    );
  }
}
