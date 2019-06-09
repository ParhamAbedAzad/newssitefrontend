import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import axios from 'axios';
export class Layout extends Component {
    static displayName = Layout.name;
    
    signOut() {
        alert("done");
        sessionStorage.clear();
    }
    link = "http://185.252.30.32:6002/news/1/6";
    new = [];
    constructor(props) {
        super(props);

        this.state = {
            newsArr: [{}],
            mail: ""
        };
    }
    componentWillMount() {
        axios.get(this.link).then(res => this.setState({ newsArr: res.data }));
    }
    getHtml() {
        if (sessionStorage.getItem("token") == null) {
            return <div><li><a href="./login">ورود</a></li>
                <li><a href="./signup">ثبت نام</a></li>
            </div>
        }

        else {
            return <div><li><a href="#" onClick={() => this.signOut()}>خروج</a></li>
                <li><a href="login">صفحه شما</a></li>
            </div >
        }
    }
    render() {
        return (


            <div id="khaje-page" className="full">
                <div id="khaje-page-center" className="middle">
                    <div id="khaje-header" className="middle-center">
                        <div id="khaje-header-right">
                            <img src="img/logo.png" alt />
                        </div>
                        <div id="khaje-header-left">
                            <img src="img/iran.gif" border={0} />
                        </div>
                    </div>
                    <div id="khaje-menu-search" className="middle-center">
                        <div id="khaje-menu">
                            <ul>
                                <li><a href="index" id="case1">صفحه نخست</a></li>
                                <li><a href="/radio" >رادیو</a></li>
                                <li><a href="/contact">تماس با ما</a></li>
                                <li><a href="/about">درباره ما</a></li>
                                {this.getHtml()}
                            </ul>
                        </div>
                        <div id="khaje-search">
                            <h6>{(sessionStorage.getItem("token") == null) ? "" : "" + " (" + sessionStorage.getItem("username") + ") " + "عزیز خوش آمدید "}</h6>
                        </div>
                    </div>
                    <div style={{ clear: 'both' }}>
                        <div className="middle-center" id="khaje-content">
                            <div id="khaje-content-right">
                                <div id="khaje-menu-right">
                                    <h2>خبرهای اخیر</h2>
                                    <ul>
                                        <li><a href={"./news/" + Object(this.state.newsArr[0]).id}>{Object(this.state.newsArr[0]).title}</a></li>
                                        <li><a href={"./news/" + Object(this.state.newsArr[1]).id}>{Object(this.state.newsArr[1]).title}</a></li>
                                        <li><a href={"./news/" + Object(this.state.newsArr[2]).id}>{Object(this.state.newsArr[2]).title}</a></li>
                                        <li><a href={"./news/" + Object(this.state.newsArr[3]).id}>{Object(this.state.newsArr[3]).title}</a></li>
                                        <li><a href={"./news/" + Object(this.state.newsArr[4]).id}>{Object(this.state.newsArr[4]).title}</a></li>
                                        <li><a href={"./news/" + Object(this.state.newsArr[5]).id}>{Object(this.state.newsArr[5]).title}</a></li>
                                    </ul>
                                </div>
                                <div id="khaje-newsletter-picture">
                                    <div id="khaje-newsletter" className="style-content">
                                        <h3>عضویت در خبرنامه</h3>
                                        <span>دریافت آخرین اخبار روز دنیا با عضویت در خبرنامه خواجه نصیر طوسی :</span>
                                        <form onSubmit={this.handleSubmit}>
                                            <input className="txt-register" type="text" onfocus="if(this.value=='Email Address'){ this.value=''}" placeholder="Email Adress" />
                                            <input className="btn-register" type="button" defaultValue="ثبت" />
                                        </form>
                                        <p><a href="#">یا میتوانید از طریق فید خبری اخبار ما را دنبال کنید.</a></p>
                                    </div>
                                </div></div>
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="full" id="khaje-footer">
                    <div className="middle">
                        <div className="middle-center" id="khaje-footer-center">
                            <div className="copy-right">
                                <section className="d-flex justify-content-between align-items-end">
                                    <div id="footer-logo" style={{ width: '100px', margin: '0px auto' }}>
                                        <img alt src="img/footer-logo.png" />
                                    </div>
                                    <div className="logo-left-box d-flex flex-row-reverse align-items-end">
                                        <div className="logo-left d-flex ">
                                        </div>
                                        <span>KHAJE NASIT</span>
                                        <span className="ml-1">NEWS AGENCY</span>
                                    </div>
                                </section>
                                <div className="mb-2 d-flex justify-content-center">
                                    <div className="license">
                                        <a rel="license" href="#" />
                                        <span />
                                        <a href="/">KHAJE.N TOOSI STUDENT NEWS CLUB</a> <span>&nbsp;IS UNLINCENSED UNDER &nbsp;</span>
                                        <a rel="license" href="https://www.kntu.ac.ir/">K.N UNIVERSITY</a>
                                        <a href="#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
