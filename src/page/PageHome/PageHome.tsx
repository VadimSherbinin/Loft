import React, {useState} from 'react'
import { Category } from '../../components/Category/Category'
import { Search } from '../../components/Search/Search'
import { Slider } from '../../components/Slider/Slider'
import { ProductsList } from '../../components/ProductList/ProductList'
import './pageHome.scss'

export const PageHome = () => {
  
  return (
    <div className="page-home">
      <Search />
      <Category />
      <Slider />
      <ProductsList />
    </div>
  )
}
