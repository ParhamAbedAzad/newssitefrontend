import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export class Contact extends Component {


  render () {
    return (
        <div>
            <h3 id="contact">مارا در شبکه های اجتماعی دیگر دنبال کنید و با ما در تماس باشید</h3><br /><br />
            <ul  >
                <li id="contact-list"><a id="contact-list-discord" href="https://discord.gg/RYZWYaT">دیسکورد</a></li><br/>
                <li id="contact-list"><a id="contact-list-insta" href="https://www.instagram.com/knnisjustice/">اینستاگرام</a></li><br />
                <li id="contact-list"><a id="contact-list-tele" href="https://t.me/KNNisJustice">تلگرام</a></li><br />
            </ul>
      </div>
    );
  }
}
