import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export class SignUp extends Component {

    link = "http://185.252.30.32:6002/Users/register";
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
    b = false;

    getHtml() {
        if (!sessionStorage.getItem("success")) {
            return (
                <div id="khaje-content-left">
                    <div id="khaje-content-main">
                        <div class="module form-module">
                            <div className="form">
                                <h2>ثبت حساب کاربری جدید</h2>
                                <form onSubmit={this.handleSubmit}>
                                    {
                                        this.state.error &&
                                        <h3  data-test="error" onClick={this.dismissError}>
                                            <button onClick={this.dismissError}>✖</button>
                                            <p id="err">{this.state.error}</p>
                                        </h3>
                                    }

                                    <label>* UserName</label>
                                    <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} placeholder="نام کاربری" /><br></br>
                                    <label>* Password</label>
                                    <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} placeholder="رمز عبور" /><br></br>
                                    <label>* Repeat Password</label>
                                    <input type="password" data-test="passwordrepeat" value={this.state.passwordrepeat} onChange={this.handlePassrepChange} placeholder="تکرار رمز عبور" /><br></br>
                                    <label>First Name</label>
                                    <input type="text" data-test="firstname" value={this.state.firstname} onChange={this.handleFnameChange} placeholder="نام" /><br></br>
                                    <label>Last Name</label>
                                    <input type="text" data-test="lastname" value={this.state.lastname} onChange={this.handleLnameChange} placeholder="نام خانوادگی" /><br></br>
                                    <label>* Email address</label>
                                    <input type="text" data-test="email" value={this.state.email} onChange={this.handleEmailChange} placeholder="ایمیل" /><br></br>
                                    <label>Tell Number</label>
                                    <input type="text" data-test="tellnumber" value={this.state.tellnumber} onChange={this.handleTellNumChange} placeholder="شماره تلفن" /><br></br>
                                    <p id="notice">فیلد های دارای * باید پر شوند</p>
                                    <input type="submit" value="Sign Up" data-test="submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>);
        }
        else {
            sessionStorage.removeItem("success");
            return (<p>successfully signed up <a href="/login">login</a> now!</p>
            );

        }
    }

    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        if (!this.state.username) {
            return this.setState({ error: '* Username is required' });
        }
        if (!this.state.password) {
            return this.setState({ error: '* password is required' });
        }
        if (!this.state.passwordrepeat) {
            return this.setState({ error: '* repeat password is required' });
        }
        if (!this.state.email) {
            return this.setState({ error: '* email is required' });
        }

        if (this.state.passwordrepeat != this.state.password) {
            return this.setState({ error: '* entered passwords do not match' });
        }
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email)) {
            return this.setState({ error: 'wrong email format' });
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
            sessionStorage.setItem("success", "success")
            window.location.reload();
        }).catch(function (error) {
            if (error.response) {
                alert(JSON.stringify(error.response.data));
                // alert(JSON.stringify(error.response));
            }
        });
        /*if (!this.b) {
            var s = this.state.username + "  " + this.state.password
            alert(this.state.username + "  " + this.state.password);
        }*/
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
            <div >
                {this.getHtml()}
            </div>
        );
    }
}
