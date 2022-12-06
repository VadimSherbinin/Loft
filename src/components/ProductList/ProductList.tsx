import React, { useEffect, useState } from 'react'
import { getProductsAPI } from '../../api'
import { Product } from '../Product/Product'
import './productList.scss'
import { IProduct } from '../../types'

export const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[] | []>([])

  // // TODO коректно ли я получаю данные при запросе. Кажется выглядит немного коряво, что я then вызываю в компоненте...
  // useEffect(() => {
  //   getProductsAPI().then((data) => setProducts(data))
  // }, [])

  return (
    <div className="product-list">
      <h2 className="product-list__title">Хиты продаж</h2>
      <div className="product-list__content">
        {products &&
          products.map((card) => {
            return <Product key={card.id} card={card} />
          })}
      </div>
    </div>
  )
}
