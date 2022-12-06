import React from 'react'
import './footer.scss'
import IconsSVG from '../../assets/image/sprite.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__nav">
            <div className="footer__nav-title">НАВИГАЦИЯ</div>
            <div className="footer__nav-list">
              <ul className="footer__nav-item">
                <li className="footer__nav-link">
                  <a href="/">Кухни</a>
                </li>
                <li className="footer__nav-link">
                  <a href="/">Спальни</a>
                </li>
                <li className="footer__nav-link">
                  <a href="/">Гостинные</a>
                </li>
              </ul>
              <ul className="footer__nav-item">
                <li className="footer__nav-link">
                  <a href="/">Прихожие</a>
                </li>
                <li className="footer__nav-link">
                  <a href="/">Офисная мебель</a>
                </li>
                <li className="footer__nav-link">
                  <a href="/">Детская</a>
                </li>
              </ul>
              <ul className="footer__nav-item">
                <li className="footer__nav-link">
                  <a href="/">Шкафы</a>
                </li>
                <li className="footer__nav-link">
                  <a href="/">Матрасы</a>
                </li>
                <li className="footer__nav-link">
                  <a href="/">Мягкая мебель</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__address">
            <div className="footer__address-logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="69" height="49">
                <use xlinkHref={`${IconsSVG}#footer-logo`}></use>
              </svg>
            </div>
            <div className="footer__address-text">
              г. Анапа, Анапское шоссе,
              <br />
              30 Ж/К Черное море
            </div>
          </div>
        </div>
        <div className="footer__end">
          <div className="footer__end-nav">
            <button className="footer__end-btn">Акции</button>
            <a href="/" className="footer__end-nav-link">
              Новинки
            </a>
          </div>
          <div className="footer__buttons">
            <a className="footer__button phone" href="tel:+79648999119">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <use xlinkHref={`${IconsSVG}#black-phone`}></use>
              </svg>
              8 (964) 89 99 119
            </a>
            <a className="footer__button insta" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                <use xlinkHref={`${IconsSVG}#insta`}></use>
              </svg>
              INSTAGRAM
            </a>
            <a className="footer__button mail" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16">
                <use xlinkHref={`${IconsSVG}#mail`}></use>
              </svg>
              mebel_loft_anapa@mail.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
