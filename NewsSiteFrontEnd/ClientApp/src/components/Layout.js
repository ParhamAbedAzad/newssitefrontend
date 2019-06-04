import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;
    getHtml() {
        if (sessionStorage.getItem("token") == null) {
            return <div><li><a href="#">ورود</a></li>
                <li><a href="signup">ثبت نام</a></li>
            </div>
        }

        else {
                return <div><li><a href="#">خروج</a></li>
                <li><a href="login">صفحه شما</a></li>
            </div >}
    }
  render () {
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
                <li><a href="contact">تماس با ما</a></li>
                <li><a href="#">درباره ما</a></li>
                {this.getHtml()}
              </ul>
            </div>
            <div id="khaje-search">
                <h6>شما با اسم username وارد شده اید</h6>
            </div>
          </div>
          <div style={{clear: 'both'}}>
            <div className="middle-center" id="khaje-content">
              <div id="khaje-content-right">
                <div id="khaje-menu-right">
                  <h2>خبرهای اخیر</h2>
                  <ul>
                    <li><a href="#">راهنمای انتخاب آبسردکن</a></li>
                    <li><a href="#">متن ساختی برای تست</a></li>
                    <li><a href="#">این یک تست است و ارزش دیگری ندارد</a></li>
                    <li><a href="#">برای تست قالب نیاز به اضافه کردن متن بدون ارزش محتوایی وجود دارد</a></li>
                    <li><a href="#">متن ساختی برای تست</a></li>
                    <li><a href="#">این یک تست است و ارزش دیگری ندارد</a></li>
                  </ul>
                </div>
                <div id="khaje-newsletter-picture">
                  <div id="khaje-newsletter" className="style-content">
                    <h3>عضویت در خبرنامه</h3>
                    <span>دریافت آخرین اخبار روز دنیا با عضویت در خبرنامه خواجه نصیر طوسی :</span>
                    <form action>
                      <input className="txt-register" type="text" onfocus="if(this.value=='Email Address') this.value='';" onblur="if(this.value=='') this.value='Email Address';" defaultValue="Email Address" />
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
                  <div id="footer-logo" style={{width: '100px', margin: '0px auto'}}>
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
                    <a href="#">KHAJE.N TOOSI STUDENT NEWS CLUB</a> <span>&nbsp;IS LINCENSED UNDER a&nbsp;</span>
                    <a rel="license" href="#">K.N UNIVERSITY</a>
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
