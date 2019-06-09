import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { withRouter } from 'react-router';
export class AddNews extends Component {

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
            title: "",
            text: "",
            pictureURL: "",
            tags: "",
            
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.dismissError = this.dismissError.bind(this);


    }
    componentDidMount() {
        this.config.headers.Authorization = "bearer " + sessionStorage.getItem("token");
        axios.get(this.linkCheck, {}, this.config).catch(() => (alert("UnAutherized"))).then(() => (alert("welcome admin")));
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
                                        <h3  data-test="error" onClick={this.dismissError}>
                                            <button onClick={this.dismissError}>✖</button>
                                            <p id="err">{this.state.error}</p>
                                        </h3>
                                    }

                                    <label>* Title</label>
                                    <input type="text" data-test="title" value={this.state.title} onChange={this.handleTitleChange} placeholder="عنوان خبر" /><br></br>
                                    <label>* Text</label>
                                    <input type="text" data-test="text" value={this.state.text} onChange={this.handleTextChange} placeholder="متن خبر" /><br></br>
                                    <label>* Tags</label>
                                    <input type="text" data-test="Tags" value={this.state.tags} onChange={this.handleTagsChange} placeholder="(دسته بندی ها(با یک خط فاصله بینشان" /><br></br>
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

        if (this.state.Tags != this.state.password) {
            return this.setState({ error: '* entered passwords do not match' });
        }
        this.config.headers.Authorization = "bearer " + sessionStorage.getItem("token");
        axios.post(this.link, {
            "title": this.state.username,
            "text": this.state.password
        }, this.config).then(() => {
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

    handleTitleChange(evt) {
        this.setState({
            username: evt.target.value,
        });
    };

    handleTextChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }
    handleTagsChange(evt) {
        this.setState({
            passwordrepeat: evt.target.value,
        });
    }


    render() {
        return (
            <div id="khaje-content-left">
                <div id="khaje-content-main">
                    <div className="insertnews">>
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

                                <label for="title">* Title</label>
                                <input type="text" id="name" data-test="title" value={this.state.title} onChange={this.handleTitleChange} placeholder="عنوان خبر" /><br></br>
                                <label for="tags">* Tags</label>
                                <input type="text" id="tags" data-test="Tags" value={this.state.tags} onChange={this.handleTagsChange} placeholder="(دسته بندی ها(با یک خط فاصله بینشان" /><br></br>
                                <label for="text">* Text</label>
                                <textarea type="text" data-test="text" value={this.state.text} onChange={this.handleTextChange} placeholder="متن خبر" /><br></br>
                                <input type="submit" class="sendbtn" value="اضافه کردن خبر" data-test="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>);
    }
}
