import React from 'react';
import Header from '../header/Header';
import "../../styles/Content.css";
import "../../styles/Content-media.css";
import About from "../about/About";
import History from "../history/History";
import News from "../news/News";
import Footer from "../footer/Footer";

const Content = () => {
    return (
        <div className="page-wrapper">
            <div className="s-first-screen">
                <div>
                    <Header />
                </div>
                <div className="first-screen-text-block">    
                    <div className="first-screen-title">
                        Одна из крупнейших фармоцевтических компаний во всем Казахстане
                    </div>
                    <div className="first-screen-subtitle">
                        «ТК Фарм Актобе» является одной из крупнейших фармацевтических компаний не только в Актюбинской области, но и по всему Казахстану. Компания производит выпуск противокашлевых сиропов: солодки, солодки с термопсисом и пертуссин
                    </div>
                </div>
            </div>
            <About />
            <History />
            <div className="s-partners">
                <div className="container">
                    <div className="section-title">наши&nbsp;партнеры</div>
               
                    <div className="partners-block-wrapper">
                        <div className="partners-content">
                            <div className="partners-content__circle"></div>
                            <div className="partners-content__title">Millenium.kz</div>
                            <div className="partners-content__text">приобрести наши товары</div>
                        </div>
                        <div className="partners-content">
                            <div className="partners-content__circle"></div>
                            <div className="partners-content__title">Farmkazyna.kz</div>
                            <div className="partners-content__text">Наш прямой партнер</div>
                        </div>
                    </div>
                </div> 
            </div> 
            <News />
            <Footer />
        </div>
    );
}

export default Content;