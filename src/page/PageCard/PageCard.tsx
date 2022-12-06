import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductByIdAPI } from '../../api'
import { Category } from '../../components/Category/Category'
import { ProductInfo } from '../../components/ProductInfo/ProductInfo'
import { SliderCard } from '../../components/SliderCard/SliderCard'
import { IProduct } from '../../types'
import './PageCard.scss'

export const PageCard = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState<IProduct | null>(null)

  useEffect(() => {
    if (productId) {
      getProductByIdAPI(productId).then((product) => {
        setProduct(product)
      })
    }
  }, [productId])

  const data = [
    { id: 1, title: 'Табуретка' },
    { id: 2, title: 'Еще табуретка' },
    { id: 3, title: 'Крутая табуретка' },
    { id: 4, title: '3' },
    { id: 5, title: 'x' },
    { id: 6, title: 'z' },
    { id: 7, title: 'a' },
    { id: 8, title: 'v' },
    { id: 9, title: 'r' },
  ]

  return (
    <div className="page-card">
      <Category />
      Главная / Гостинные / Мягкая мебель / Диваны
      {product && (
        <div className="page-card__content">
          <SliderCard />
          <ProductInfo product={product} />
        </div>
      )}
    </div>
  )
}
