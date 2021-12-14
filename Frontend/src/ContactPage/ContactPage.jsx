import React from 'react';
import "./style.css";

export default function ContactPage() {
    return (
        <div className="contact-wrapper">
            <h1>Контакти наших відділень</h1>
            <div className="section-wrapper">
                <section>
                    <h3>Телефони</h3>
                    <a href="tel:+380995494340">+380995494340</a>
                    <a href="tel:+380995494340">+380995494340</a>
                </section>
                <section>
                    <h3>Email</h3>
                    <a href="mailto:olezio.olezio@gmail.com">olezio.oleezio@gmail.com</a>
                </section>
                <section className="work-days">
                    <h3>Графік роботи</h3>
                    <div className="days-row">
                        <p>Понеділок-п'ятниця:</p>
                        <p>10:00 - 19:00</p>
                    </div>
                    <div className="days-row">
                        <p>Субота:</p>
                        <p>11:00 - 17:00</p>
                    </div>
                    <div className="days-row">
                        <p>Неділя:</p>
                        <p>11:00 - 16:00</p>
                    </div>
                </section>
                <section>
                    <h3>Адреса</h3>
                    <a href="https://g.page/logos_it_academy?share">
                        <strong>Львів</strong><br/>
                        вул. І.Франка, 61/500
                    </a>
                </section>
            </div>
            <h1 className="footer-header">BOSS AUTO UKRAINE</h1>
        </div>
    )
}
