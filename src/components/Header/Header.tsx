import React, { FC } from 'react'
import './header.scss'
import IconsSVG from '../../assets/image/sprite.svg'

interface IHeader {
  title?: string
}

export const Header: FC<IHeader> = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div>
            <a className="header__link" href="/">
              Главная
            </a>
            <a className="header__link" href="/">
              О Нас
            </a>
            <a className="header__link" href="/">
              Контакты
            </a>
          </div>
          <div className="header__buttons">
            <a className="header__phone" href="tel:+79648999119">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                <use xlinkHref={`${IconsSVG}#phone`}></use>
              </svg>
              8 (964) 89 99 119
            </a>
            <button className="header__delivary">
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="16.92">
                <use xlinkHref={`${IconsSVG}#delivary`}></use>
              </svg>
              Доставка
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
