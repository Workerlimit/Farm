import React, {useState} from 'react';
import '../../styles/Footer.css';
import "../../styles/Footer-media.css";
import { CSSTransition } from "react-transition-group";

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isNavOpen2, setIsNavOpen2] = useState(false);

    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-menu">
                        <div className="footer-navigation">
                            <div className="footer-menu-title">Навигация <div className={`${isNavOpen ? "footer-menu-open" : "footer-menu-close"}`} onClick={() => {setIsNavOpen(!isNavOpen)}}></div></div>
                            <div className={`footer-nav ${isNavOpen ? "f-show" : "f-hide"}`}>
                                <a href="#">Главная</a>
                                <a href="#">О компании</a>
                                <a href="#">Новости</a>
                                <a href="#">Наша продукция</a>
                                <a href="#">Галерея</a>
                            </div>
                        </div>
                        <div className="contacts">
                            <div className="footer-menu-title">Контакты <div className={`${isNavOpen2 ? "footer-menu-open" : "footer-menu-close"}`} onClick={() => {setIsNavOpen2(!isNavOpen2)}}></div></div>
                            <div className={`contact-block ${isNavOpen2 ? "f-show" : "f-hide"}`}>
                                <div className="contact-title">Адрес</div>
                                <div className="contact-text">Фурманова 14A</div>
                            </div>
                            <div className={`contact-block ${isNavOpen2 ? "f-show" : "f-hide"}`}>
                                <div className="contact-title">E-mail</div>
                                <div className="contact-text">TKFARM@gmail.com</div>
                            </div>
                            <div className={`contact-block ${isNavOpen2 ? "f-show" : "f-hide"}`}>
                                <div className="contact-title">Телефон</div>
                                <div className="contact-text">+7 (708) 422 - 42 - 42</div>
                            </div>
                        </div>
                    </div>
                    <div className="send-form">
                        Свяжитесь с нами
                        <button onClick={() => setIsOpen(true)}>Связаться</button>
                    </div>
                    <CSSTransition
                        in={isOpen}
                        timeout={200}
                        classNames="contact-form"
                        unmountOnExit
                    >
                        <div className="form-wrapper">
                            <div className="form-top">
                                <div className="form-title">Свяжитесь с нами</div>
                                <div className="form-close-btn" onClick={() => setIsOpen(false)}></div>
                            </div>
                            <input type="text" placeholder="Ф.И.О"></input>
                            <input type="email" placeholder="E-mail"></input>
                            <input type="text" placeholder="Организация"></input>
                            <input type="text" placeholder="Суть запроса"></input>
                            <div className="form-btn" onClick={() => { setIsOpen(false); setIsSend(true)}}>Отправить</div>
                        </div>
                    </CSSTransition>
                    <CSSTransition
                        in={isSend}
                        timeout={200}
                        classNames="form-send"
                        unmountOnExit
                    >
                        <div className="send-wrapper">
                            <div className="form-title">Спасибо за заявку</div>
                            <div className="send-text">Мы свяжемся с вами в ближайшее время </div>
                            <div className="form-btn send-btn" onClick={() => setIsSend(false)}>Закрыть окно</div>
                        </div>
                    </CSSTransition>
                </div>
                <div className="footer-bottom">
                    <div>2021 © <b>ТК фарм</b></div>
                    <div>Все права защищены</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;