import React, { Component } from 'react';
import axios from 'axios';
export class AddComment extends Component {
    link = "http://185.252.30.32:6002/Comments";
    constructor(props) {
        super(props);
        this.state = {
            commentText: ""
        };
        this.handleCommentTextChange = this.handleCommentTextChange.bind(this);
    }
    config = {
        headers: {
            Authorization: ""
        }
    }
    addNewComment() {
        axios.post(this.link, {
            'newsId': this.props.id,
            'body': this.state.commentText
        }, this.config).then(() => (alert("comment added succesfully"))).catch(() => (alert("unsuccesfull")));
        this.config.headers.Authorization = "bearer " + sessionStorage.getItem("token");
    }
    handleCommentTextChange(evt) {
        this.setState({
            commentText: evt.target.value,
        });
    };
    render() {
        return (
            <div>
                <div class="addcmt">
                    <form dir="rtl" class="cmtfrm" onSubmit={this.addNewComment}>
                        <p>
                            <textarea name="text" placeholder="متن خود را بنویسید. " value={this.state.commentText} onChange={this.handleCommentTextChange}></textarea>
                        </p>
                        <p>
                            <input type="submit" value="ارسال" class="sendbtn"  ></input>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
