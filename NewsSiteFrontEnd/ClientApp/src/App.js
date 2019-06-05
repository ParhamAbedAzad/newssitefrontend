import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { SingleNews } from './components/News';
import { WholeNews } from './components/WholeNews';
import { Login } from './components/Login';
import { AdminLogin } from './components/AdminLogin';
import { SignUp } from './components/SignUp';
export default class App extends Component {
    static displayName = App.name;
    
    render() {
        return (
            <Layout>
                
                <Route exact path='/' component={Home} />
                <Route exact path='/index' component={Home} />
                <Route path='/News/:id' component={WholeNews} />
                <Route path='/Login' component={Login} />
                <Route path='/AdminLogin' component={AdminLogin} />
                <Route path='/signup' component={SignUp} />
          </Layout >
          
      /*<Layout>
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>*/
    );
  }
}
