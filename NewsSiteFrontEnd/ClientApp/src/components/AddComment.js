import React, { Component } from 'react';
import axios from 'axios';
export class AddComment extends Component {
    link = "link to add a comment";
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }
    addNewComment() {
        axios.post(this.link, {
            'newsId': this.props.id,
            "text": this.state.username
        }).then(() => (alert("comment added succesfully"))).catch();
    }
    handleTextChange (evt) {
        this.setState({
            text: evt.target.value,
        });
    };
    render() {
        return (
            <div>
                <div class="addcmt">
                    <form dir="rtl" class="cmtfrm" onSubmit={this.addNewComment()}>
                        <p>

                            <textarea name="text" placeholder="متن خود را بنویسید. "></textarea>
                        </p>
                        <p>
                            <input type="submit" value="ارسال" class="sendbtn"></input>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}
