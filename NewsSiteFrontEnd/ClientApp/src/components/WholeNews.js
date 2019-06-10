import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Comment } from './Comment.js';
import { AddComment } from './AddComment.js';
export class WholeNews extends Component {
    link = "http://185.252.30.32:6002/news/";
    link2 = "http://185.252.30.32:6002/newsPhoto/n/";
    i = 0;
    result = "";

    model = {
        id: 0,
        title: "",
        text: "",
        adminid: 0,
        tags: [{}],
        comments: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]
    }

    constructor(props) {
        super(props);

        this.state = {
            singleNews: this.model,
            newsPhoto: []
        };
    }
    wiseAddComment() {
        if (sessionStorage.getItem("token") != null) {// must be changed to ==
            return <p>برای ثبت نظر اول در سایت عضو شوید</p>
        } else {
            return <AddComment id={this.props.match.params.id} />
        }
    }
    componentWillMount() {
        axios.get(this.link + this.props.match.params.id).then(res => {
            const result = res.data;
            console.log(res.data);
            this.setState({ singleNews: res.data });
        });

        axios.get(this.link2 + this.props.match.params.id).then(res => {
            const resu = res.data;
            console.log(res.data);
            this.setState({ newsPhoto: res.data });
        });
    }


    render() {
        return (


            <div id="khaje-content-left">
                <div id="khaje-content-main">
                    <div id="khaje-news" className="style-content">
                        <div id="news">
                            <div className="news-center">
                                <div className="news-title"><h2>{this.state.singleNews.title}</h2>
                                    <div>
                                        <div style={{ clear: 'both' }} />
                                    </div></div><br />
                                <div className="post-img" style={{ textAlign: 'center' }}>
                                    <a href="#" style={{ margin: '0px auto' }}>
                                        <img classNameName="imgnews" src={'/img/' + this.state.newsPhoto.map(h => h.photoUrl) + '.jpg'} alt="titleIMG" width="500em" height="250em"></img>
                                    </a><div style={{ clear: 'both' }} /></div>
                                <br /><br /><div className="post-content"><p>{this.state.singleNews.text}</p></div>
                                <div style={{ clear: 'both' }}>
                                </div>
                            </div>


                        </div>
                        <hr></hr>



                        <div id="comments">
                            <h2><span>نظرات خبر</span></h2>
                            <div class="section-comments">
                                {this.state.singleNews.comments.map((c) => {
                                    return <Comment body={c}> </Comment>
                                })}

                            </div>
                            <h2><span>ثبت دیدگاه جدید</span></h2>
                            <div class="cmttoptxt">دیدگاه جدید </div>
                        {this.wiseAddComment()}
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}




// addComment Component
/*<div class="addcmt"><form dir="rtl" class="cmtfrm">
<p>
<label for="name">نام</label>
<input type="text" name="name" id="name" placeholder="پرهام عابد آزاد">

</p>
<p>
<label for="email">ایمیل</label>
<input type="text" name="email" id="email" placeholder="mail@example.ir">

</p>
<p>
<label for="web">
وب سایت</label>
<input type="text" name="web" id="web" placeholder="www.example.ir">

</p>
<p>
<textarea name="text" placeholder="متن خود را بنویسید. "></textarea>
</p>
<p>
<input type="submit" value="ارسال" class="sendbtn">
</p>
</form></div>*/