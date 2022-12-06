import './product.scss'
import React, { FC, useState, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../atoms/Icon'
import { IProduct } from '../../types'

interface IProductProps {
  card: IProduct
}

export const Product: FC<IProductProps> = ({ card }) => {
  const { title, id, price, image, category } = card
  const [like, setLike] = useState(false)

  const toggleLike = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLike(!like)
  }

  const changeProduct = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
    ) => {
    if (e.currentTarget.tagName === 'svg' || e.currentTarget.tagName === 'BUTTON') {
      e.stopPropagation()
      e.preventDefault()
    }
  }

  return (
    <Link
      onClick={(e) => changeProduct(e)}
      to={`products/${id}`}
      className="product"
    >
      <div className="product__wrap">
        <button
          onClick={(e) => toggleLike(e)}
          className={like ? 'product__like active' : 'product__like'}
        >
          <Icon iconId="like" width="19" height="17" />
        </button>
        <div className="product__image">
          <img src={image} alt="cтул" />
        </div>
        <div className="product__all">
          <div className="product__title">{title}</div>
          <div className="product__subtitle">{category}</div>
          <div className="product__price">{price}₽</div>

          <div className="product__drop-info">
            <div className="product__size">Размеры</div>
            <div className="product__info">
              <div className="product__info-item">
                <h3>ШИРИНА</h3>
                <p>43 СМ</p>
              </div>
              <div className="product__x">×</div>
              <div className="product__info-item">
                <h3>ГЛУБИНА</h3>
                <p>43 СМ</p>
              </div>
              <div className="product__x">×</div>
              <div className="product__info-item">
                <h3>ВЫСОТА</h3>
                <p>77 СМ</p>
              </div>
            </div>
            <button className="product__btn">Добавить в корзину</button>
          </div>
        </div>
      </div>
    </Link>
  )
}
