import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import IconsSVG from '../../assets/image/sprite.svg'
import { IProduct } from '../../types'
import './productInfo.scss'

interface IProductInfo {
  product: IProduct
}

export const ProductInfo: FC<IProductInfo> = ({product}) => {
  return (
    <div>
      <div className="page-card">

       {/* // !TODO вынести в отдельный компонент */}
        <div className="page-card__rating">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
            <use xlinkHref={`${IconsSVG}#rating`}></use>
          </svg>
        </div>

        <h2 className="page-card__title">{product.title}</h2>
        <Link className="page-card__category" to="#">{product.category}</Link>

        <div className="page-card__wrapper">
          <h2 className="page-card__price">{product.price}₽</h2>

          {/* // TODO сделать отдельным компонентом */}
          <button className="page-card__btn">Купить</button>

          <div className="page-card__wishlist">
            <button>
              <svg height="17.5" width="15">
                <use xlinkHref={`${IconsSVG}#wishlist`}></use>
              </svg>
            </button>
            <h2>Добавить в желаемое</h2>
          </div>
        </div>

        <div className="page-card__subtitle">
          <h2>Цвет</h2>
          <h2>Количество</h2>
          <h2>Размер (Д × Ш × В)</h2>
        </div>
        <div></div>
        <div className="page-card__description">
          <h2>Описание</h2>
          <p>
            Лаконичные линии и простые формы, безупречный стиль и
            индивидуальность – все это диван «Динс». Сдержанный скандинавский
            дизайн украсит любую современную обстановку. Элегантность, комфорт и
            функциональность, собранные воедино – «Динс» просто создан для
            размеренного отдыха в кругу семьи или компании друзей!
          </p>
        </div>
      </div>
    </div>
  )
}
