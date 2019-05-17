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
                  <div className="singleNews">
                      <h2>بازی The Elder Scrolls: Blades رایگان شدت</h2>
                      <div className="textandpic">
                          <p>در رویداد E3 2018 بود که استودیوی بتسدا (Bethesda) از عرضه‌ عنوانی از سری محبوب The Elder Scrolls برای تلفن‌های هوشمند خبر داد. حال به تازگی این استودیوی بازی‌سازی اعلام کرده که نسخه‌ی دسترسی زودهنگام بازی The Elder Scrolls: Blades برروی فروشگاه‌های مرتبط قرار گرفته و تمامی بازی‌بازان و کاربران می‌توانند به‌طور رایگان به تجربه‌ی آن بپردازند.</p>
                          <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="200em" height="100em" />
                      </div>
                  </div>
                  <div className="singleNews">
                      <h2>بازی World of Goo برای مدتی رایگان شدت</h2>
                      <div className="textandpic">
                          <p>در جریان اخبار دنیای بازی‌های ویدئویی، به تازگی تیم سازنده عنوان World of Goo اعلام کرده که این بازی برای مدتی برروی فروشگاه معتبر و بزرگ اپیک گیمز، به صورت رایگان در دسترس خواهد بود. پس اگر جزو طرفداران این بازی مهیج و قدیمی هستید، این فرصت را از دست ندهید.</p>
                          <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="200em" height="100em" />
                      </div>
                  </div>
                  <div className="singleNews">
                      <h2>معرفی سرویس استیدیا سرمایه‌گذاران کنسول استودیوی اسلایتلی مد را کاهش داده است</h2>
                      <div className="textandpic">
                          <p>استودیوی اسلایتلی مد (Slightly Mad Studio) مدتی است که تلاش دارد یک کنسول جدید را به بازار عرضه کند. این کنسول در ابتدا قرار بود Mad Box نامیده شود ولی به دلیل مشکلات حقوقی پیش آمده، این استودیو مجبور است نام دیگری را برای کنسول خود انتخاب کند. با این حال، به نظر می‌رسد انتخاب یک نام مناسب تنها مشکل این استودیو در راه انتشار یک کنسول جدید نیست.</p>
                          <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="200em" height="100em" />
                      </div>
                  </div>
                  <div className="singleNews">
                      <h2>Vampire: The Masquerade – Bloodlines 2 | با قبیله‌ی Brujah آشنا شوید</h2>
                      <div className="textandpic">
                          <p>شهر سیاتل در بازی Vampire: The Masquerade – Bloodlines 2 دارای فضایی تاریک و پر از خون آشام خواهد بود، اما قرار نیست تا تمام این خون آشام‌ها مشابه یکدیگر باشند. این افراد عضو گروه‌ها و قبایل متنوعی هستند که هرکدام توانایی‌ها و ضعف‌های خاصی را دارند. حال در طی یک ویدئوی جدید، توسعه دهندگان به معرفی قبیله‌ی Brujah پرداخته‌اند.</p>
                          <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="200em" height="100em" />
                      </div>
                  </div>
                  <div className="singleNews">
                      <h2>روند توسعه‌ی بازی Rage 2 به اتمام رسید</h2>
                      <div className="textandpic">
                          <p>
                              زمان زیادی تا انتشار بازی Rage 2 نمانده و اکنون مشاهده می‌کنیم که روند ساخت این بازی تمام شده است.
              </p>
                          <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="200em" height="100em" />
                      </div>
                  </div>
                  <div className="singleNews">
                      <h2>پلاتینوم‌گیمز از روند توسعه‌ی غیر معمول Bayonetta 3 می‌گوید</h2>
                      <div className="textandpic">
                          <p>تقریباً زمان زیادی از معرفی بازی Bayonetta 3 گذشته است، اما ظاهراً پلاتینوم‌گیمز (PlatinumGames) قصد ندارد به این زودی اطلاعات تازه‌ای را از این عنوان مورد انتظار به اشتراک بگذارد. حال براساس مصاحبه‌ی جدید مدیر این استودیو با وب‌سایت VGC، به نظر می‌رسد که روند توسعه‌ی Bayonetta 3 با دیگر نسخه‌های این سری تفاوت دارد.</p>
                          <img src="img/Vampire-the-Masquerade-Bloodlines.jpg" alt="titleIMG" width="200em" height="100em" />
                      </div>
                      </div>
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
