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
import { blank } from './components/blank';
import { AddNews } from './components/AddNews';
import { DelNews } from './components/DelNews';
import { BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>  <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/home/:id' component={Home} />
                    <Route exact path='/index' component={Home} />
                    <Route path='/News/:id' component={WholeNews} />
                    <Route path='/Login' component={Login} />
                    <Route path='/Admin' component={AdminLogin} />
                    <Route path='/signup' component={SignUp} />
                    <Route path='/radio' component={Radio} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={AboutUs} />
                    <Route path='/addnews' component={AddNews} />
                    <Route path='/delnews' component={DelNews} />
                    <Route path='/404' component={NotFound} />
                    <Redirect to="/404"  />
                </Switch>
            </Layout >

            </div>
            /*<Layout>
              <Route path='/counter' component={Counter} />
              <Route path='/fetch-data' component={FetchData} />
            </Layout>*/
        );
    }
}
