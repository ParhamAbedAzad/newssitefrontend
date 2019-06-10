import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { withRouter } from 'react-router';
export class DelNews extends Component {

    linkCheck = "http://185.252.30.32:6002/Admins/isAuthorized";
    link = "http://185.252.30.32:6002/News";

    bodyData = {
        title: "",
        text: ""
    };
    config = {
        headers: {
            Authorization: ""
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            id: ""
        };
        this.handleIdChange = this.handleIdChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);


    }
    componentWillMount() {

        this.config.headers.Authorization = "bearer " + sessionStorage.getItem("token");
        axios.get(this.linkCheck, this.config).catch(() => { console.log("unauthorized"); window.location.href = "/"; }).then();
    }
    getHtml() {
        if (!sessionStorage.getItem("success")) {
            return (
                <div id="khaje-content-left">
                    <div id="khaje-content-main">
                        <div class="module form-module">
                            <div className="form">
                                <h2>ثبت خبر جدید</h2>
                                <form onSubmit={this.handleSubmit}>
                                    {
                                        this.state.error &&
                                        <h3 data-test="error" onClick={this.dismissError}>
                                            <button onClick={this.dismissError}>✖</button>
                                            <p id="err">{this.state.error}</p>
                                        </h3>
                                    }

                                    <label>* ID</label>
                                    <input type="text" data-test="title" value={this.state.id} onChange={this.handleIdChange} placeholder="ID" /><br></br>
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
        if (!this.state.id) {
            return this.setState({ error: 'ID is required' });
        }
        this.config.headers.Authorization = "bearer " + sessionStorage.getItem("token");

        axios.delete(this.link + "/" + this.state.id, this.config).then(() => {
            alert("news Deleted successfully");
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

    handleIdChange(evt) {
        this.setState({
            id: evt.target.value,
        });
    };



    render() {
        return (
            <div id="khaje-content-left">
                <div id="khaje-content-main">
                    <div className="insertnews">
                        <div id="posting" className="addcmt">
                            <h2>ثبت خبر جدید</h2>
                            <form className="cmtfrm" onSubmit={this.handleSubmit}>
                                {
                                    this.state.error &&
                                    <h3 data-test="error" onClick={this.dismissError}>
                                        <button onClick={this.dismissError}>✖</button>
                                        <p id="err">{this.state.error}</p>
                                    </h3>
                                }

                                <label for="ID">* ID</label>
                                <input type="text" id="name" data-test="id" placeholder="NewsId" value={this.state.id}  onChange={this.handleIdChange}  /><br></br>
                                <input type="submit" class="sendbtn" value="حذف کردن خبر" data-test="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
