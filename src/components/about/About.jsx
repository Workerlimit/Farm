import React from "react";
import device from "../../images/image-block/device.jpg";
import probirka from "../../images/image-block/probirka.jpg";

const About = () => {
    return (
        <div className="s-second-screen">
            <div className="container">
                <div className="section-title">О&nbsp;компании</div>
                <div className="image-block">
                    <div className="text-border">
                        <div className="image-block__text">
                            <div className="image-block__title">мы занимаемся Производством лекарственных препаратов и медицинских изделий</div>
                            <p className="image-block__content">«ТК Фарм Актобе» является одной из крупнейших фармацевтических компаний не только в Актюбинской области, но и по всему Казахстану. Компания производит выпуск противокашлевых сиропов: солодки, солодки с термопсисом и пертуссин, а также экстракта корня солодки и глицирризиновой кислоты высокой степени очистки для использования в косметологии и фармацевтике.</p>
                        </div>
                    </div>
                    
                    <div className="image-block__photo">
                        <div className="photo-border photo-border--right"></div>
                        <img src={device}></img>
                    </div>
                </div>
                <div className="image-block">
                    <div className="image-block__photo">
                        <div className="photo-border photo-border--left"></div>
                        <img src={probirka}></img>
                    </div>
                    <div className="text-border">
                        <div className="image-block__text">
                            <div className="image-block__title">мы занимаемся Производством лекарственных препаратов и медицинских изделий</div>
                            <p className="image-block__content">«ТК Фарм Актобе» является одной из крупнейших фармацевтических компаний не только в Актюбинской области, но и по всему Казахстану. Компания производит выпуск противокашлевых сиропов: солодки, солодки с термопсисом и пертуссин, а также экстракта корня солодки и глицирризиновой кислоты высокой степени очистки для использования в косметологии и фармацевтике.</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
}

export default About;