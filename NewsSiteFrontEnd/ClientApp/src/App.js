import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter, Contact } from './components/Contact';
import { SingleNews } from './components/SingleNews';
import { WholeNews } from './components/WholeNews';
import { Login } from './components/Login';
import { AdminLogin } from './components/AdminLogin';
import { SignUp } from './components/SignUp';
import { Radio } from './components/Radio';
import { AboutUs } from './components/AboutUs';
import { NotFound } from './components/NotFound';

import { BrowserRouter, Link,  Switch } from 'react-router-dom';


export default class App extends Component {
    static displayName = App.name;
    
    render() {
        return (
            <div>  <Layout>
                
                <Route exact path='/' component={Home} />
                <Route exact path='/index' component={Home} />
                <Route path='/News/:id' component={WholeNews} />
                <Route path='/Login' component={Login} />
                <Route path='/Admin' component={AdminLogin} />
                <Route path='/signup' component={SignUp} />
                <Route path='/radio' component={Radio} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={AboutUs} />
                <Route path='*' component={NotFound} />
            </Layout >
          </div>
      /*<Layout>
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>*/
    );
  }
}
