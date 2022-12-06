import './category.scss'
import React from 'react'
import IconsSVG from '../../assets/image/sprite.svg'

export const Category = () => {

  const data = [
    { id: 1, title: 'Кухни', img: 'ckitchen' },
    { id: 2, title: 'Спальни', img: 'badroom' },
    { id: 3, title: 'Гостинные', img: 'livingroom' },
    { id: 4, title: 'Прихожие', img: 'closet' },
    { id: 5, title: 'Офисная мебель', img: 'office' },
    { id: 6, title: 'Детская', img: 'childrensroom' },
    { id: 7, title: 'Акции' },
  ]

  return (
    <div className='category'>
      {data.map((category) => {
        return (
          <div className="category__item" key={category.id}>
            {category.img &&
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
              <use xlinkHref={`${IconsSVG}#${category.img}`}></use>
            </svg>}
            <h2>{category.title}</h2>
          </div>
        )
      })}
    </div>
  )
}
