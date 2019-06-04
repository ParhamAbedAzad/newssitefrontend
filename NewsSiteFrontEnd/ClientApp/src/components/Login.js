import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export class Login extends Component {

    link = "https://localhost:44335/Users/authenticate";
    constructor(props) {
        super(props);
        this.state = {
            obj: {},
            username: "",
            password: ""
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }
    b = false;

    getHtml() {
        if (Object(this.state.obj).id == null) {
            return
            <div id="khaje-content-left">
                <div id="khaje-content-main">
                    <div class="module form-module">
                        <div className="form">
                            <h2>ورود به حساب خود</h2>
                                <form onSubmit={this.handleSubmit}>
                                    {
                                        this.state.error &&
                                        <h3 data-test="error" onClick={this.dismissError}>
                                            <button onClick={this.dismissError}>✖</button>
                                            {this.state.error}
                                        </h3>
                                    }
                                    <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                                    <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

                                    <input type="submit" value="Log In" data-test="submit" />
                                </form>
                            <div class="cta"><a href="./index.html">حساب کاربری ندارید ؟ کلیک کنید</a></div>
                        </div>
                    </div>
                </div>
            </div>
        }
        else {
            return <p>you are signed in as {Object(this.state.obj).username}</p>
        }
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }
        this.b = false;
        axios.post(this.link, {
            "username": this.state.username,
            "password": this.state.password
        }).then(res => {
            this.b = true;
            this.setState({ obj: Object(res.data) })
            sessionStorage.setItem("token", Object(this.state.obj).token)
            sessionStorage.setItem("username", Object(this.state.obj).username)
            sessionStorage.setItem("userlogin", Object(this.state.obj))


        }).catch();
        if (!this.b) {
            var s = this.state.username + "  " + this.state.password
            alert(this.state.username + "  " + this.state.password);
        }
        // axios.post(this.link, this.bodyData, this.config).catch(this.setState({ error: "submited succecfully" }));



    }

    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {
        return (
            <div id="khaje-content-left">
                <div id="khaje-content-main">
                    <div class="module form-module">
                        <div className="form">
                            <h2>ورود به حساب خود</h2>
                            <form onSubmit={this.handleSubmit}>
                                {
                                    this.state.error &&
                                    <h3 data-test="error" onClick={this.dismissError}>
                                        <button onClick={this.dismissError}>✖</button>
                                        {this.state.error}
                                    </h3>
                                }
                                <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} placeholder="نام کاربری" />
                                <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} placeholder="رمز عبور" />

                                <input type="submit" value="Log In" data-test="submit" />
                            </form>
                            <div class="cta"><a href="./signup">حساب کاربری ندارید ؟ کلیک کنید</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
