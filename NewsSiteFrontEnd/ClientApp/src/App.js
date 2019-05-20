import React, { Component } from 'react';
import './components/Style.css';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { SingleNews } from './components/News';
import { WholeNews } from './components/WholeNews';
import { Login } from './components/Login';

export default class App extends Component {
    static displayName = App.name;
    
    render() {
      return (
         <Layout>
              <Route exact path='/' component={Home} />
              <Route path='/News/:id' component={WholeNews} />
              <Route path='/Login' component={Login} />
          </Layout >
          
      /*<Layout>
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>*/
    );
  }
}
