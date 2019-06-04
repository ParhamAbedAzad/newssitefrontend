import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export class SignUp extends Component {

    link = "https://localhost:44335/Users/register";
    constructor(props) {
        super(props);
        this.state = {
            obj: {},
            username: "",
            password: "",
            passwordrepeat: "",
            firstname: "",
            lastname: "",
            email: "",
            tellnumber: ""
        };
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handlePassrepChange = this.handlePassrepChange.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFnameChange = this.handleFnameChange.bind(this);
        this.handleLnameChange = this.handleLnameChange.bind(this);
        this.handleTellNumChange = this.handleTellNumChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);
    }


    getHtml() {
        if (!sessionStorage.getItem("success")) {
            return <form onSubmit={this.handleSubmit}>
                {
                    this.state.error &&
                    <h3 data-test="error" onClick={this.dismissError}>
                        <button onClick={this.dismissError}>✖</button>
                        {this.state.error}
                    </h3>
                }
                <label>UserName *</label>
                <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} /><br></br>
                <label>Password *</label>
                <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} /><br></br>
                <label>Repeat Password *</label>
                <input type="password" data-test="passwordrepeat" value={this.state.passwordrepeat} onChange={this.handlePassrepChange} /><br></br>
                <label>First Name</label>
                <input type="text" data-test="firstname" value={this.state.firstname} onChange={this.handleFnameChange} /><br></br>
                <label>Last Name</label>
                <input type="text" data-test="lastname" value={this.state.lastname} onChange={this.handleLnameChange} /><br></br>
                <label>Email address *</label>
                <input type="text" data-test="email" value={this.state.email} onChange={this.handleEmailChange} /><br></br>
                <label>Tell Number</label>
                <input type="text" data-test="tellnumber" value={this.state.tellnumber} onChange={this.handleTellNumChange} /><br></br>

                <input type="submit" id="login2" value="Log In" data-test="submit" />
            </form>
        }
        else {
            sessionStorage.removeItem("success");
            return <p>successfully signed up!</p>
            
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
        if (!this.state.email) {
            return this.setState({ error: 'email is required' });
        }
        if (!this.state.passwordrepeat) {
            return this.setState({ error: 'repeat password is empty' });
        }
        if (this.state.passwordrepeat != this.state.password) {
            return this.setState({ error: 'entered passwords do not match' });
        }


        axios.post(this.link, {
            "username": this.state.username,
            "password": this.state.password,
            "firstname": this.state.firstname,
            "lastname": this.state.lastname,
            "email": this.state.email,
            "tellnumber": this.state.tellnumber
        }).then(res => {
            this.setState({ obj: Object(res.data) })
            sessionStorage.setItem("success","success")
            }).catch(function (error) {
                if (error.response) {

                    alert(error.response.data);
                    //alert(JSON.stringify(error.response));
            }
            });
        window.location.reload();
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
    handlePassrepChange(evt) {
        this.setState({
            passwordrepeat: evt.target.value,
        });
    }
    handleEmailChange(evt) {
        this.setState({
            email: evt.target.value,
        });
    };
    handleFnameChange(evt) {
        this.setState({
            firstname: evt.target.value,
        });
    };
    handleLnameChange(evt) {
        this.setState({
            lastname: evt.target.value,
        });
    };
    handleTellNumChange(evt) {
        this.setState({
            tellnumber: evt.target.value,
        });
    };

    render() {
        return (
            <div className="Login">
                {this.getHtml()}
            </div>
        );
    }
}