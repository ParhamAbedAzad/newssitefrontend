import React, { Component } from 'react';
import './components/Style.css';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { SingleNews } from './components/News';

export default class App extends Component {
  static displayName = App.name;
    sampleNew = {
        id: 11,
        title: "sth sth sth",
        text: "Rep. Alexandria Ocasio-Cortez blamed Twitter's character limitations -- and the reading skills of her critics -- after getting called out for spreading misinformation about the newly signed abortion ban in Alabama. The New York Democrat used the social media platform to criticize the law, which was signed by the governor on Wednesday and outlaws nearly all abortions in the state. The same law also makes performing an abortion a felony, punishable by up to 99 years or life in prison unless the mother’s health is at risk, with no exceptions for women impregnated by rape or incest.",
        dateAdded: "2019-05-16T19:28:41.943",
        adminId: 2,
        admin: null,
        comments: [],
        newsPhoto: [],
        tags: []
    }
    sampleNew2 = {
        id: 11,
        title: "sth sth sth",
        text: " E3 2018 بود که استودیوی بتسدا (Bethesda) از عرضه‌ عنوانی از سری محبوب The Elder Scrolls برای تلفن‌های هوشمند خبر داد. حال به تازگی این استودیوی بازی‌سازی اعلام کرده که نسخه‌ی دسترسی زودهنگام بازی The Elder Scrolls: Blades برروی فروشگاه‌های مرتبط قرار گرفته و تمامی بازی‌بازان و کاربران می‌توانند به‌طور رایگان به تجربه‌ی آن بپردازند.",
        dateAdded: "2019-05-16T19:28:41.943",
        adminId: 2,
        admin: null,
        comments: [],
        newsPhoto: [],
        tags: []
    }
  render () {
      return (

          <div className="mainPage">
              <section>
                  <div className="singleNews">
                      <div className="textandpic">
                          <div className="texts">
                              <a href="index.html"><h2>مصاحبه با سازندگان The Surge 2 | صحبت درباره گیم پلی، درجه‌ی سختی و بیشترت</h2></a>
                              <p>بسیاری از بازی‌بازان سری The Surge را از بازی‌های بسیار سخت صنعت بازی‌های ویدئویی می‌نامند. نسخه‌ی اول این سری در سال ۲۰۱۶ توسط استودیوی دک ۱۳ (Deck 13) توسعه یافت و به وسیله‌ی شرکت فوکوس هوم اینتراکتیو (Focus Home Interactive) منتشر شد. این عنوان با ارائه‌‌ی گیم پلی بسیار سخت در سبک نقش‌ آفرینی توانست عده‌ی خاصی از کاربران را، با وجود کسب نمرات نس…</p>
                          </div>
                          <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="200em" height="100em"></img>
                        
                    </div>
                  </div>
                  <SingleNews new={this.sampleNew}></SingleNews>
                  <SingleNews new={this.sampleNew2}></SingleNews>
                  <SingleNews new={this.sampleNew}></SingleNews>
                  <SingleNews new={this.sampleNew2}></SingleNews>
                  <SingleNews new={this.sampleNew}></SingleNews>
                  <SingleNews new={this.sampleNew2}></SingleNews>
                  <SingleNews new={this.sampleNew}></SingleNews>
                  
              </section>
              <nav>
                  <img src="img/login.png" alt width="400em" />
              </nav>
          </div>
      /*<Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>*/
    );
  }
}
