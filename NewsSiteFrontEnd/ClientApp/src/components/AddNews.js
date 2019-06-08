import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export class AddNews extends Component {
    link = "http://185.252.30.32:6002/News";
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            pictureURL: ""
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleFnameChange = this.handleFnameChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);


    }

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
        if (!this.state.title) {
            return this.setState({ error: '* Title is required' });
        }
        if (!this.state.text) {
            return this.setState({ error: '* Text is required' });
        }

        if (this.state.passwordrepeat != this.state.password) {
            return this.setState({ error: '* entered passwords do not match' });
        }
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(this.state.email)) {
            return this.setState({ error: 'wrong email format' });
        }
        axios.post(this.link, {
            "title": this.state.username,
            "text": this.state.password
        }).then(res => {
            this.setState({ obj: Object(res.data) })
            window.location.reload();
            alert("news added successfully");
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
