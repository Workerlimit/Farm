import React, {useRef} from 'react';
import "../../styles/News.css";
import "../../styles/News-media.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const News = () => {
    const slider = useRef(null);
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }
      
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
              breakpoint: 699,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
        ]
    };

    return (
        <div className="section-news">
            <div className="container">
                <div className="news-top">
                    <div className="section-title">Новости</div>
                    <div className="navigation">
                        <div className="arrow arrow-prev" onClick={ () => slider.current.slickPrev()}></div>
                        <div className="arrow arrow-next" onClick={ () => slider.current.slickNext()}></div>
                    </div>
                </div>
                <Slider {...settings} ref={slider}>
                    <div className="news-wrapper">
                        <div className="news-date">28.07.2021</div>
                        <div className="news-title">Сделанным в Актобе лекарством будут лечиться и в Европе</div>
                        <div className="news-content">«ТК Фарм Актобе» является одной из крупнейших фармацевтических компаний не только в Актюбинской области, но и по всему Казахстану. </div>
                        <div className="news-btn">Читать далее</div>
                    </div>
                    <div className="news-wrapper">
                        <div className="news-date">28.07.2021</div>
                        <div className="news-title">Сделанным в Актобе лекарством будут лечиться и в Европе</div>
                        <div className="news-content">«ТК Фарм Актобе» является одной из крупнейших фармацевтических компаний не только в Актюбинской области, но и по всему Казахстану. </div>
                        <div className="news-btn">Читать далее</div>
                    </div>
                    <div className="news-wrapper">
                        <div className="news-date">28.07.2021</div>
                        <div className="news-title">Сделанным в Актобе лекарством будут лечиться и в Европе</div>
                        <div className="news-content">«ТК Фарм Актобе» является одной из крупнейших фармацевтических компаний не только в Актюбинской области, но и по всему Казахстану. </div>
                        <div className="news-btn">Читать далее</div>
                    </div>
                    <div className="news-wrapper">
                        <div className="news-date">28.07.2021</div>
                        <div className="news-title">Сделанным в Актобе лекарством будут лечиться и в Европе</div>
                        <div className="news-content">«ТК Фарм Актобе» является одной из крупнейших фармацевтических компаний не только в Актюбинской области, но и по всему Казахстану. </div>
                        <div className="news-btn">Читать далее</div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default News;