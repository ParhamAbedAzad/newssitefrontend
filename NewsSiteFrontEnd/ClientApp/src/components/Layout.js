import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;
    getHtml() {
        if (localStorage.getItem("username") != null) {
            return <form onSubmit={this.handleSubmit}>
                {
                    this.state.error &&
                    <h3 data-test="error" onClick={this.dismissError}>
                        <button onClick={this.dismissError}>✖</button>
                        {this.state.error}
                    </h3>
                }
                <label>User Name</label>
                <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
                <label>Password</label>
                <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

                <input type="submit" value="Log In" data-test="submit" />
            </form>
        }
        else {
            return <p></p>
        }
    }
  render () {
      return (
              <div className="Container">
                  <header>
                  <div className="siteText">
                      {/* <a href="MyPage.html"><img src="img/SkyNews.png"  alt="Icon" width="200px" height="50px"><a> */}
                      <h1> <a href="./" id="siteText" >بهترین سایت خبری ایران و جهان</a> </h1>
                  </div>

                  
                  <div className="navBarClass">
                      <h3><a>دسته ها</a></h3>
                  </div>
                  <div className="navBarClass">
                  <h3><a>رادیو WIP</a></h3>
                  </div>
                  <div className="navBarClass">
                      <h3><a>Contact us</a></h3>
                  </div>
                  <div className="navBarClass">
                      <form action="./adminlogin" >
                          <h3><button type="submit" id="login" >ورود</button ></h3>
                      </form>
                  </div>
                  <div className="icon">
                      <a href="./"><img src="img/output-onlinepngtools (2).png" alt="Icon" width="200px" height="60px" /></a>
                  </div>

                   </header>
              {this.props.children}
              <footer>
                  <div className="list">
                      <b>حقوقی</b><br />
                      <a href="ContactUs.html">کوکی ها</a><br />
                      <a href="ContactUs.html">درباره ما</a><br />
                      <a href="ContactUs.html">شرایط و ضوابط</a><br />
                      <a href="ContactUs.html">مشاغل</a><br />
                      <a href="ContactUs.html">تبلیغات</a><br />
                  </div>
                  <div className="list">
                      <b>فضای اجتماعی</b><br />
                      <a href="ContactUs.html">اینستاگرام</a><br />
                      <a href="ContactUs.html">تلگرام</a><br />
                      <a href="https://discord.gg/5EyQdsX">دیسکورد</a><br />
                      <a href="ContactUs.html">توببتر</a><br />
                      <a href="ContactUs.html">فیسبوک</a>
                  </div>
                  <div className="list">
                      <b>دسته ها</b><br />
                      <a href="ContactUs.html">سیاسی</a><br />
                      <a href="ContactUs.html">ورزشی</a><br />
                      <a href="ContactUs.html">محیط زیست</a><br />
                      <a href="ContactUs.html">اجتماعی</a><br />
                      <a href="ContactUs.html">فرهنگی</a>
                  </div>
                  <div className="blank" />
              </footer>
              </div>

    );
  }
}
