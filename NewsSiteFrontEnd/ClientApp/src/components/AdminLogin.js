import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class AdminLogin extends Component {
    obj = null;
    link = "https://localhost:44335/Admins/authenticate";
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }

    getHtml() {
        if (this.obj == null) {
            return <form onSubmit={this.handleSubmit}>
                {
                    this.state.error &&
                    <h3 data-test="error" onClick={this.dismissError}>
                        <button onClick={this.dismissError}>✖</button>
                        {this.state.error}
                    </h3>
                }
                <label>User Name</label>
                <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                <label>Password</label>
                <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

                <input type="submit" value="Log In" data-test="submit" />
            </form>
        }
        else {
            return <p>you are signed in</p>
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

        axios.post(this.link, {
            "username": this.state.username,
            "password": this.state.password
        }).then(res => (this.obj = Object(res.data)))
        alert(this.obj.Username);
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
            <section id="login">
                <div className="login_box">
                    <form className="login_form" action={this.handleSubmit}>
                        <div className="input_box">
                            <i className="icon fas fa-user"></i><input className="input_field" type="text" placeholder="exp. jhon" name="email" />
                        </div>
                        <div className="input_box">
                            <i className="icon fas fa-lock"></i><input className="input_field" type="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;" name="password" />
                        </div>
                        <div className="forgot_pw">
                            <a href="#">کلمه عبور را فراموش کرده اید؟</a>
                        </div>
                        <button className="submit_btn" type="submit">ورود</button>
                        <a className="signup_btn" href="./SignUp">ثبت نام</a>
                    </form>
                </div>
            </section>
        );
    }
}