import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
      return (
              <div className="Container">
                  <header>
                      <div className="siteText">
                      {/* <a href="MyPage.html"><img src="img/SkyNews.png"  alt="Icon" width="200px" height="50px"><a> */}
                      <a href="./"><h1>  بهتربن سایت خبری ایران و جهان</h1></a> 
                      </div>
                      <div className="icon">
                          <a href="./"><img src="img/SkyNews.png" alt="Icon" width="200px" height="50px" /></a>
                      </div>
                   </header>
              {this.props.children}
              <footer>
                  <div className="list">
                      <b>حقوقی</b><br /><br />
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
                      <a href="ContactUs.html">دیسکورد</a><br />
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
