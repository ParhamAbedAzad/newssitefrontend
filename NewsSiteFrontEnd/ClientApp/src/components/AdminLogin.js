import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class AdminLogin extends Component {
    
    link = "https://localhost:44335/Admins/authenticate";
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
    logOut() {
        localStorage.removeItem("token");
        window.location.href = './adminLogin';
    }

    getHtml() {
        if (!localStorage.getItem("token")) {
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

                <input type="submit" id="login2" value="Log In" data-test="submit" />
            </form>
        }
        else {
            return <p>you are signed in <button id="logout" onClick={this.logOut}>logout</button><br></br><button id="login2" onClick="window.location.href = './addNews';">add News</button></p>
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
        }).then(res => {
            this.setState({ obj: Object(res.data) })
            localStorage.setItem("token", Object(this.state.obj).token)
            }).catch((e) => (alert("wrong U/P")));
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