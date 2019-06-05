import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export class Contact extends Component {


    render() {
        return (
            <div>
                <h3 id="contact">مارا در شبکه های اجتماعی دیگر دنبال کنید</h3>

                <p id="contact-list"><a id="contact-list-discord" href="https://discord.gg/RYZWYaT">دیسکورد     </a>
                    <a id="contact-list-insta" href="https://www.instagram.com/knnisjustice/">اینستاگرام      </a>
                    <a id="contact-list-tele" href="https://t.me/KNNisJustice">تلگرام     </a></p>

                <h3 id="contact">و با ما در تماس باشید</h3>
                <p id="mairu"><a id="mairu" href={"mailto:" + "parhamabedazad@yahoo.com"}  >parhamabedazad@yahoo.com</a></p>
                <p id="mairu"><a id="mairu" href={"mailto:" + "abedini@email.kntu.ac.ir"}  >abedini@email.kntu.ac.ir</a></p>

                <p id="mairu"><a id="mairu" href={"mailto:" + "amirmohammad.abedini@gmail.com"}  >amirmohammad.abedini@gmail.com</a></p>

            </div>
        );
    }
}
