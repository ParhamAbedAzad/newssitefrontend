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
        return alert("wrong user or pass");
        axios.post(this.link, {
            "username": this.state.username,
            "password": this.state.password
        }).then(res => {
            this.b = true;
            this.setState({ obj: Object(res.data) })
            localStorage.setItem("token", Object(this.state.obj).token)
            localStorage.setItem("username", Object(this.state.obj).username)
            localStorage.setItem("userlogin", Object(this.state.obj))


        }).catch();
        if (!this.b) {
            alert("wrong user or pass");
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
            <div className="Login">
                {this.getHtml()}
            </div>
        );
    }
}