import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../atoms/Icon'
import { useClosingSideMenu } from '../../hooks/closeSideBar'
import './asside.scss'

export const Asside = () => {
  const [isOpen, setIsOpen] = useState(false)

  useClosingSideMenu(setIsOpen)

  const hedlerCloseAside = () => {
    setIsOpen((old) => !old)
  }

  const data = [
    { id: 1, name: 'Кухни', img: 'kitchen', link: '/' },
    { id: 2, name: 'Спальни', img: 'bedroom', link: '/' },
    { id: 3, name: 'Гостинные', img: 'livingroom', link: '/' },
    { id: 4, name: 'Прихожие', img: 'closet', link: '/' },
    { id: 5, name: 'Офисная мебель', img: 'office', link: '/' },
    { id: 6, name: 'Детская', img: 'childrensroom', link: '/' },
    { id: 7, name: 'Акции', img: 'actions', link: '/' },
    { id: 8, name: 'Новинки', img: 'new', link: '/' },
    { id: 9, name: 'Матрасы', img: 'mattress', link: '/' },
    { id: 10, name: 'Кресла', img: 'armchair', link: '/' },
    { id: 11, name: 'Фурнитура', img: 'cupboard', link: '/' },
  ]

  const styles = !isOpen ? 'asside' : 'asside active'

  return (

    <div className={styles}>
      
      {data.map((asside) => {
        return (
          <Link to="/" className="asside__item" key={asside.id}>
            <Icon iconId={asside.img} width="22" height="22" />
            <span>{asside.name}</span>
          </Link>
        )
      })}
      <button onClick={hedlerCloseAside} className="asside__btn-close"></button>
    </div>
  )
}
