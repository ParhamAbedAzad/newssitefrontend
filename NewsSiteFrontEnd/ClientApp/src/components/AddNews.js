import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
export class AddNews extends Component {
    link = "https://localhost:44335/News";
    bodyData = {
        title: "test",
        text: "test"
    };
    config = {
        headers: {
            Authorization: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5GdWxsQWNjZXNzIiwiYWRtaW5pZCI6IjEiLCJuYmYiOjE1NTgzMzYyNjIsImV4cCI6MTU1ODM0NzA2MiwiaWF0IjoxNTU4MzM2MjYyLCJpc3MiOiJvdXJCZWF1dGlmdWxOZXdzU2l0ZSIsImF1ZCI6InVzZXIifQ.i4Dw5Kbi9hMomCPdjBmvMQvo9sff1hT2LMsbnDBTwIg"
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            text: "",
            tags: ""
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    }


    componentWillMount() {
        
    }
    
    dismissError() {
        this.setState({ error: '' });
    }

    handleSubmit(evt) {
        evt.preventDefault();

        if (!this.state.title) {
            return this.setState({ error: 'Title is required' });
        }

        if (!this.state.text) {
            return this.setState({ error: 'Text is required' });
        }
        this.bodyData.text = this.state.text;
        this.bodyData.title = this.state.title;
        this.config.headers.Authorization = "bearer " + localStorage.getItem("token");
        //this.bodyData.set("tags", this.state.tags.split(' '));
        axios.post(this.link, this.bodyData, this.config).catch(this.setState({ error: "submited succecfully" }));
        


        return;
    }
    
    handleTitleChange(evt) {
        this.setState({
            title: evt.target.value,
        });
    };

    handleTextChange(evt) {
        this.setState({
            text: evt.target.value,
        });
    }
    handleTagsChange(evt) {
        this.setState({
            tags: evt.target.value,
        });
    }

    render() {

        return (
            <div className="AddNews">
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                    <label>Title</label>
                    <input type="text" data-test={this.state.title} value={this.state.username} onChange={this.handleTitleChange} />

                    <label>Text</label>
                    <input type="text" data-test={this.state.text} value={this.state.password} onChange={this.handleTextChange} />

                    <label>Tags</label>
                    <input type="text" data-test={this.state.tags} value={this.state.password} onChange={this.handleTagsChange} />

                    <input id="login2" type="submit" value="addNews" data-test="submit" />
                </form>
            </div>
        ); 


    }


}